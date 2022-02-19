import fixture from "../fixtures/example.json";

Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    url: "https://norma.nomoreparties.space/api/auth/login",
    body: JSON.stringify({ email: "laamora@yandex.ru", password: "password" }),
  }).then((resp) => {
    window.localStorage.setItem("accessToken", resp.body.accessToken);
    window.localStorage.setItem("refreshToken", resp.body.refreshToken);
  });
});

describe("constructor tests", () => {
  before(() => {
    cy.visit("http://localhost:3000/");
  });

  it("check cabinet button loaded", () => {
    cy.contains("Личный кабинет");
  });

  it("turn to auth page", () => {
    cy.get("div").contains("Личный кабинет").click();
    cy.contains("Вход");
  });

  it("type auth data", () => {
    cy.get("input").first().as("email");
    cy.get("input").last().as("password");
    cy.get(".input__icon-action").first().as("email_edit_button");
    cy.get(".input__icon-action").last().as("password_edit_button");

    cy.get("@email_edit_button").click();
    cy.get("@email").type("laamora@yandex.ru");

    cy.get("@password_edit_button").click();
    cy.get("@password").type("password");

    cy.get("@email").should("have.value", "laamora@yandex.ru");
    cy.get("@password").should("have.value", "password");
  });

  it("authorization", () => {
    cy.get("button").contains("Войти").click();
    cy.contains("Соберите бургер");
  });

  it("open ingredient modal", () => {
    cy.get('[alt="Краторная булка N-200i"]').click();
    cy.get("#modal").contains("Детали ингридиента");
  });

  it("check ingredient details", () => {
    cy.get("#calories").contains("420");
    cy.get("#proteins").contains("80");
    cy.get("#fats").contains("24");
    cy.get("#carbohydrates").contains("53");
  });

  it("close ingredient modal", () => {
    cy.get("#closeIcon").click();
    cy.get("#root").not("#modal");
  });

  it("drag and drop testing", () => {
    cy.get("div").contains("Краторная булка N-200i").as("bun");
    cy.get("div").contains("Соус Spicy-X").as("ingredient");
    cy.get("div").get("#constructor").as("contructor_container");

    cy.get("@bun").trigger("dragstart");
    cy.get("@contructor_container").trigger("drop");

    cy.get("@ingredient").trigger("dragstart");
    cy.get("@contructor_container").trigger("drop");

    cy.get("@contructor_container").contains("Краторная булка N-200i");
    cy.get("@contructor_container").contains("Соус Spicy-X");
  });

  it("check order", () => {
    cy.login();
    cy.intercept("POST", "https://norma.nomoreparties.space/api/orders", {
      fixture: "example.json",
    }).as("order");
    cy.get("button").contains("Оформить заказ").click();
    cy.wait("@order").then((res) =>
      expect(res.response.body.order.number).equal(fixture.order.number)
    );
    cy.get("#modal").contains(`${fixture.order.number}`);
  });

  it("close order modal", () => {
    cy.get("#closeIcon").click();
    cy.get("#root").not("#modal");
  });
});
