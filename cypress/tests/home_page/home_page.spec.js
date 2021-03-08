import { HomePage } from '../../pages/homePage/HomePage';
import { HomePageStrings } from '../../pages/homePage/HomePageStrings';
import { usersRoute } from "../../api/routes";
import { usersPayload } from "../../api/payloads/userPayloads";
import { UserCreatePage } from '../../pages/userCreatePage/UserCreatePage'




describe("Should check the home page elements without users", () => {

  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  });

  it('Verify that text of the Create button is correct', () => {
    HomePage.createUserButton().contains(HomePageStrings.CREATE_USER_BUTTON_EXPECTED_TEXT)
  });

  it('Verify that if no user exist rows are not displayed', () => {
    HomePage.firstRow().should('not.exist')
  })

  it('Verify that a text is displayed if no users are displayed', () => {
    HomePage.noUserText().should('be.visible')
  })

  it('Verify that the text that is displayed if no users are present is correct ', () => {
    HomePage.noUserText().contains(HomePageStrings.NO_USERS_WERE_FOUND_TEXT)
  })

  it ('Verify that the Search By textbox is displayed', () => {
    HomePage.searchByInput().should('be.visible')
  })
});


describe("Should check the home page elements with  users", () => {

  before(() => {
    //create a new user
    cy.postRequest(usersRoute(), usersPayload("create")).then(response => {
      expect(response.status).to.be.equal(201);
    });

    //intercept the get request 
    cy.intercept(HomePage.HOME_PAGE_URL).as("dataGetFirst")

    cy.visit(Cypress.config().baseUrl)

    //wait for the the get request to be done
    cy.wait("@dataGetFirst", { timeout: 20000 });
  });

  it('Verify that  no text is displayed if users are displayed', () => {
    HomePage.noUserText().should('not.exist')
  })

  it('Verify that name column is displayed', () => {
    HomePage.nameColumn().contains(HomePageStrings.NAME_COLUMN_TEXT)
  })

  it('Verify that email column is displayed', () => {
    HomePage.emailColumn().contains(HomePageStrings.EMAIL_COLUMN_TEXT)
  })

  it('Verify that address column is displayed', () => {
    HomePage.addressColumn().contains(HomePageStrings.ADDRESS_COLUMN_TEXT)
  })

  it('Verify that active column is displayed', () => {
    HomePage.activeColumn().contains(HomePageStrings.ACTIVE_COLUMN_TEST)
  })

  it('Verify that the username is correctly displayed', () => {
    HomePage.userName().contains(usersPayload("create").username)
  })

  it('Verify that the email is correctly displayed', () => {
    HomePage.userEmail().contains(usersPayload("create").email)
  })

  it('Verify that the address is correctly displayed', () => {
    HomePage.userAddress().contains(usersPayload("create").address)
  })

  it('Verify that the user is active', () => {
    HomePage.userStatus().should('be.checked')
  })

  it('Verify that the delete button text is correct', () => {
    HomePage.deleteButtons().contains(HomePageStrings.DELETE_BUTTON_TEXT)
  })

  it('Verify that the user is deleted', () => {
    HomePage.deleteButtonFromFirstRow().click();
    HomePage.deleteButtons().should('not.exist')
  })
})

describe('Shoud check if create button redirect the user do the expected url', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl)
  })

  it('Verify that user is redirected to the create user', () => {
    HomePage.createUserButton().click()
    cy.asserURL(UserCreatePage.USER_CREATE_PAGE_URL)

  })
})

