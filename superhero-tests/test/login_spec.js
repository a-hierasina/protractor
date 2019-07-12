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
    
    it('should display all Login page elements', function () {
        expect(loginPage.loginTitleTxt.isDisplayed()).toBe(true)
        expect(loginPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log In.')

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
        loginPage.submitBtn.click()
        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(loginPage.loginErrorMsg.getText()).toEqual('An e-mail and password are required.')
    })
    it('should display error message when no password entered', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.submitBtn.click()
        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(loginPage.loginErrorMsg.getText()).toEqual('An e-mail and password are required.')
    })
    it('should display error message when no email entered', function () {
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()
        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(true)
        expect(loginPage.loginErrorMsg.getText()).toEqual('An e-mail and password are required.')

    })
    it('should log user in', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()
        expect(loginPage.loginErrorMsg.isDisplayed()).toBe(false)

    })
})