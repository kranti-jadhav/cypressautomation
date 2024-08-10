class Secondpage

{

    getPmbutton()
        {
           return  cy.get('span')
        }
    getEmployeeInformation()
    {
    
       return  cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
    }
    getclickonAddbutton()
    {
        return cy.get('button[type="submit"]')
    }
    getclickonMenu()
    {
       return cy.get('.oxd-userdropdown-name')
    }
    getLogoutbutton()
    {
      return  cy.contains('Logout')
    }
}
export default Secondpage