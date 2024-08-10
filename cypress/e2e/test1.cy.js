     /// <reference types="Cypress"/>
     import Homepage from "./Pageobjectmodel/Homepage.cy"
     import Secondpage from "./Pageobjectmodel/secondpage.cy"

     


describe('template spec', () => {
  before(function(){


    cy.fixture('example').then(function(data){
         this.data=data

  })
 
 })

   

   it('loginTestcase', () => {
const  homepage =new Homepage()


    cy.login('Admin','admin123')
   })
      
    it('passes2', () => {
      const secondpage =new Secondpage()
      cy.login(this.data.username,this.data.username)
      secondpage.getPmbutton().contains('PIM').click()

    secondpage.getEmployeeInformation()
      .type('Christopher').should('have.value','Christopher')
      secondpage.getclickonAddbutton().click()
     //secondpage.getclickonMenu().click()
     // secondpage.getLogoutbutton().click()
    
      
    
      
      
     
    
      
     
         
         

         

    
    })
  })