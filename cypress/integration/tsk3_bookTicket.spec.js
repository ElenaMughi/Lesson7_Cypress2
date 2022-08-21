import "@4tw/cypress-drag-drop";

describe("BookTicket", () => {
  it("Should add room", () => {
    cy.visit("http://qamid.tmweb.ru/admin/");
    cy.fixture("selector.json").then((selector) => {
      cy.fixture("login.json").then((loginAdm) => {
        cy.get(selector[1].login).type(loginAdm[0].login);
        cy.get(selector[2].pass).type(loginAdm[0].pass);
      });
      cy.get(selector[0].loginButton).click();
    });

    // const dataTransfer = new Image();
    const dataTransfer = new DataTransfer();
    // dataTransfer.url = "../img/posters/93.png";

    cy.get("[draggable='true'][data-film-id='93']").trigger("dragstart", {dataTransfer});
    cy.get("div [data-hall-id='2091'] > div").trigger("drop", { dataTransfer });
    cy.get("[draggable='true'][data-film-id='93']").trigger("dragend");

    cy.get("#start-sales > .text-center > .conf-step__button").click();

    cy.visit("http://qamid.tmweb.ru");
    cy.contains("Alphahall").should("be.visible");
  });
});
