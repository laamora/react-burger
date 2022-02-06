import type { AnyAction, Middleware, MiddlewareAPI } from "redux";

export interface WsActions {
  wsInit: string;
  wsInitAll: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
}

export const socketMiddleware = (
  wsUrl: string,
  wsActions: WsActions
): Middleware => {
  return ((store: MiddlewareAPI) => {
    let socket: WebSocket | null = null;

    return (next) => (action: AnyAction) => {
      const { dispatch } = store;
      const { type } = action;
      const { wsInit, wsInitAll, onOpen, onClose, onError, onMessage } =
        wsActions;

      if (type === wsInitAll) {
        // объект класса WebSocket
        socket = new WebSocket(`${wsUrl}/all`);
      }
      if (type === wsInit) {
        // объект класса WebSocket
        const token = localStorage
          .getItem("accessToken")
          ?.split("Bearer")[1]
          .split(" ")[1];
        socket = new WebSocket(`${wsUrl}?token=${token}`);
      }
      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: onMessage, payload: restParsedData });
        };

        // функция, которая вызывается при закрытии соединения
        socket.onclose = (event) => {
          socket!.close();
          dispatch({ type: onClose, payload: event });
        };
      }

      next(action);
    };
  }) as Middleware;
};
