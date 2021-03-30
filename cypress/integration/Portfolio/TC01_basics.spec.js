describe("Home Page", function(){
  it("Home Page Loads", function(){
    cy.visit('https://www.dylanyudis.com/')
    cy.get('.title-text').contains('Dylan Yudis')
    cy.get('.subtitle-text').contains('Web Development')
  })
})