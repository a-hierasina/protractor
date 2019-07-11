// Tests for Login Page

// Page Object File
var LoginPage = require('../page-objects/login_page')

describe('Login Page Tests', function () {
    var loginPage
    
    beforeEach(function () {
        loginPage = new LoginPage()

        //Since this is not an Angular site
        browser.ignoreSynchronization = true
        //Open URL
        browser.get('http://localhost:63342/protractor/superhero/index.html')
        
    })
    afterEach(function () {
        
    })
    
    it('', function () {
        
    })
    it('', function () {

    })
    it('', function () {

    })
})