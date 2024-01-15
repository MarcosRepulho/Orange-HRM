import userData from '../fixtures/user-Data.json'

describe('Orange HRM Tests', () => {

      const selectorsList = {  
        usernameField:  "[name='username']",
        passwordField:  "[name='password']",
        loginButton:    "[type='submit']",
        sectionTitleTopBar:".oxd-topbar-header-breadcrumb-module",
        dashboardGrid: ".orangehrm-dashboard-grid",
        wrongCredentialsAlert:"[role='alert']",
        myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        dateField: "[placeholder='yyyy-mm-dd']",
        dateCloseButton: ".--close",
        submitButton: "[type='submit']",
      }
      
  it.only('User Info Update - Success', () => {
    
    cy.visit('/auth/login')
    cy.get( selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('Junior Oliveira')
    cy.get(selectorsList.lastNameField).clear().type('Magalhoes')
    cy.get(selectorsList.genericField).eq(3).clear().clear().type('Juninho')
    cy.get(selectorsList.genericField).eq(4).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherIDTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversLicenseTest')
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericField).eq(8).clear().type('SSnNumberTest')
    cy.get(selectorsList.genericField).eq(9).clear().type('sinNumberTest')
    cy.get(selectorsList.submitButton).eq(0).click({force: true })
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click({force: true })
    cy.get('.oxd-select-dropdown > :nth-child(15)').click()
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click({force: true })
    cy.get(':nth-child(4) > span').click()

  })
  
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert)
  })
})