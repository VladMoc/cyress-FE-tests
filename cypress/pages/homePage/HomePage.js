export class HomePage {
    //List of elements

    static createUserButton = () => cy.get('[data-testid=create-user-button]');
    static userListHedear = () => cy.get('.card-header');
    static searchByInput = () => cy.get('[data-testid="search-input"]');
    static noUserText = () => cy.get('[data-testid="no users text"]');
    static firstRow = () => cy.get('#row1');
    static nameColumn = () => cy.get('[data-testid=column-name]');
    static emailColumn = () => cy.get('[data-testid=column-email]');
    static addressColumn = () => cy.get('[data-testid=column-address]');
    static activeColumn = () => cy.get('[data-testid=column-active]');
    static deleteButtonFromFirstRow = () => cy.get('#row1 [data-testid="delete-button"]');
    static deleteButtons = () => cy.get('[data-testid="delete-button"]');
    static userName = () => cy.get('[data-testid="row-name"]');
    static userEmail = () => cy.get('[data-testid="row-email"]');
    static userAddress = () => cy.get('[data-testid="row-adress"]');
    static userStatus = () => cy.get('[data-testid="row-checkbox"]');



    //web link 
    static HOME_PAGE_URL = "users"

}
