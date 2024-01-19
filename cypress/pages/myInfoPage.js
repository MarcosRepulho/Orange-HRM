class MyInfoPage{
      
    selectorsList(){
        const selectors = { 
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
    }

         return selectors
    }
    
        fillPersonalDetails(firstName, lastName, nickName){
            cy.get(this.selectorsList().firstNameField).clear().type(firstName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)
            cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
        }

        fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate ,ssnNumber, sinNumber){
            cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
            cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber)
            cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDate)
            cy.get(this.selectorsList().dateCloseButton).click()
            cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
            cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumber)
        }

        saveform(){
            cy.get(this.selectorsList().submitButton).eq(0).click({force: true })
            cy.get('body').should('contain', 'Successfully Updated')
            cy.get('.oxd-toast-close')
        }

        fillStatus(){
            cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click({force: true })
            cy.get('.oxd-select-dropdown > :nth-child(15)').click()
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click({force: true })
            cy.get(':nth-child(4) > span').click()
        }



}

export default MyInfoPage
