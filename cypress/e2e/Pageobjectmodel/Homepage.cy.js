class Homepage
{
    getuserName()
    {
       return cy.get('input[name=username]')
    }
    getpassword()
    {
       return cy.get('input[name=password]')
    }
    getLoginButton()
    {
       return cy.get('button[type=submit]')


    }
    



}
export default Homepage
