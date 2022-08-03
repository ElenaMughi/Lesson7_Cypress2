describe("BookTicket", () => {
  it("Should book tiket at room", () => {
    cy.visit("http://qamid.tmweb.ru/admin/");

    cy.fixture("login.json").then((loginAdm) => {
      cy.get('[for="email"] > .login__input').type(loginAdm[0].login);
      cy.get("[for='pwd'] > .login__input").type(loginAdm[0].pass);
    });
    cy.get(".login__button").click();

    cy.contains("Администраторррская").should("be.visible");

    cy.fixture("room.json").then((room) => {});
  });
});
