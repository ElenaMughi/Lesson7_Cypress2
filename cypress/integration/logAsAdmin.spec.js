describe("PositiveTest1", () => {
  it("Should'n be login as Admin", () => {
    cy.visit("http://qamid.tmweb.ru/admin/");

    cy.fixture("login.json").then((loginAdm) => {
      cy.get('[for="email"] > .login__input').type(loginAdm[1].login);
      cy.get("[for='pwd'] > .login__input").type(loginAdm[1].pass);
    });
    cy.get(".login__button").click();

    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Should be login as Admin", () => {
    cy.visit("http://qamid.tmweb.ru/admin/");

    cy.fixture("login.json").then((loginAdm) => {
      cy.get('[for="email"] > .login__input').type(loginAdm[0].login);
      cy.get("[for='pwd'] > .login__input").type(loginAdm[0].pass);
    });
    cy.get(".login__button").click();

    cy.contains("Администраторррская").should("be.visible");
  });
});
