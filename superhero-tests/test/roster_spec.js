var RosterPage = require('../page-objects/roster_page')
var LoginPage = require('../page-objects/login_page')
describe('Roster Tests', function () {
    var rosterPage
    var loginPage


    beforeEach(function () {
        rosterPage = new RosterPage()
        loginPage = new LoginPage()

        browser.ignoreSynchronization = true
        browser.get('http://localhost:63342/protractor/superhero/index.html')

    })
    afterEach(function () {

    })

    it('should display all roster elements', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()

        expect(rosterPage.rosterTitleTxt.isDisplayed()).toBe(true)
        expect(rosterPage.rosterTitleTxt.getText()).toEqual('Build your Superhero Roaster:')

        expect(rosterPage.wolverineItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.wolverineItemTxt.getText()).toEqual('Wolverine')

        expect(rosterPage.ironManItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.ironManItemTxt.getText()).toEqual('Iron Man')

        expect(rosterPage.deadpoolItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.deadpoolItemTxt.getText()).toEqual('Deadpool')

        expect(rosterPage.thorItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.thorItemTxt.getText()).toEqual('Thor')

        expect(rosterPage.spidermanItemTxt.isDisplayed()).toBe(true)
        expect(rosterPage.spidermanItemTxt.getText()).toEqual('Spider-Man')

        expect(rosterPage.rosterFieldLbl.isDisplayed()).toBe(true)
        expect(rosterPage.rosterFieldLbl.getText()).toEqual('ADD A SUPERHERO')

        expect(rosterPage.rosterFld.isDisplayed()).toBe(true)
        expect(rosterPage.rosterFld.getText()).toEqual('')

        expect(rosterPage.submitBtn.isDisplayed()).toBe(true)

    })
    it('should add hero on submit', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()

        rosterPage.rosterFld.sendKeys('Ms Marvel')
        rosterPage.submitBtn.click()
        expect(element(by.css('#hero-list > li:nth-child(6)')).isDisplayed()).toBe(true)
        expect(element(by.css('#hero-list > li:nth-child(6)')).getText()).toEqual('Ms Marvel')
    })
})