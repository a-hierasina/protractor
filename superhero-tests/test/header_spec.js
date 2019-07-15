var HeaderPage = require('../page-objects/header_page')
var LoginPage = require('../page-objects/login_page')

describe('Header Tests', function () {
    var headerPage
    var loginPage

    beforeEach(function () {
        headerPage = new HeaderPage()
        loginPage = new LoginPage()

        browser.ignoreSynchronization = true
        browser.get('http://localhost:63342/protractor/superhero/index.html')

    })
    afterEach(function () {

    })

    it('should contain all header elements', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()

        expect(headerPage.headerTitle.isDisplayed()).toBe(true)
        expect(headerPage.headerTitle.getText()).toEqual('Superhero Roster')

        expect(headerPage.headerImage.isDisplayed()).toBe(true)

        expect(headerPage.headerBody.isDisplayed()).toBe(true)
        expect(headerPage.headerBody.getText()).toEqual('Imagine that you are tasked with building a team of Superheroes to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.')
    })
})