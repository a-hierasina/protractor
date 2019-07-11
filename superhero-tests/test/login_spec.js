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
    
    fit('should display all Login page elements', function () {
        expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true)

        expect(loginPage.emailFieldLbl.isDisplayed()).toBe(true)
        expect(loginPage.emailField.isDisplayed()).toBe(true)
        expect(loginPage.emailField.getText()).toEqual('')

        expect(loginPage.passwordFieldLbl.isDisplayed()).toBe(true)
        expect(loginPage.passwordField.isDisplayed()).toBe(true)
        expect(loginPage.passwordField.getText()).toEqual('')

        expect(loginPage.rememberChkLbl.isDisplayed()).toBe(true)
        expect(loginPage.rememberChk.isDisplayed()).toBe(true)
        expect(loginPage.rememberChk.isSelected()).toBe(false)

        expect(loginPage.submitBtn.isDisplayed()).toBe(true)


    })
    it('should display error message when no email and password entered', function () {

    })
    it('should display error message when no password entered', function () {

    })
    it('should display error message when no email entered', function () {

    })
    it('should log user in', function () {

    })
})