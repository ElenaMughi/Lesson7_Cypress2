describe("SiteVisible", () => {
  it("Should be enter to site", () => {
    cy.visit("http://qamid.tmweb.ru");
    cy.get(".page-nav__day_today").next().click();
    cy.get(".movie-seances__time").first().click();
    cy.get(".acceptin-button").should("be.disabled");
    //   const seats = require("../fixtures/example.json");
    cy.fixture("example.json").then((seats) => {
      seats.forEach((place) => {
        cy.get(
          `.buying-scheme__wrapper > :nth-child(${place.row}) > :nth-child(${place.seat})`
        ).click();
      });
    });
    cy.get(".acceptin-button").should("not.be.disabled").click();
    cy.get(".acceptin-button").should("be.visible").and("not.be.disabled");
    cy.get(":nth-child(2) > .ticket__details").then(($el) => {
      cy.log($el[0].textContent);
    });
  });
});
