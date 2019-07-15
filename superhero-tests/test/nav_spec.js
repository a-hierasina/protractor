var LoginPage = require('../page-objects/login_page')
var NavPage = require('../page-objects/nav_page')

describe('Navigation bar Tests', function () {
    var navPage
    var loginPage

    beforeEach(function () {
        navPage = new NavPage()
        loginPage = new LoginPage()

        browser.ignoreSynchronization = true
        browser.get('http://localhost:63342/protractor/superhero/index.html')

    })
    afterEach(function () {

    })

    it('should display all nav elements', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()

        expect(navPage.homeLnk.isDisplayed()).toBe(true)
        expect(navPage.logoutLnk.isDisplayed()).toBe(true)

        expect(navPage.heroFactsLnk.isDisplayed()).toBe(true)
        navPage.heroFactsLnk.click()
        expect(navPage.wolverineOpt.isDisplayed()).toBe(true)
        expect(navPage.spidermanOpt.isDisplayed()).toBe(true)

    })
    it('should display and close Wolverine modal', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()

        navPage.heroFactsLnk.click()
        navPage.wolverineOpt.click()

        browser.sleep(1000)

        expect(navPage.wolverineModalTitle.isPresent()).toBeTruthy()
        expect(navPage.wolverineModalTitle.getText()).toEqual('Wolverine Fact')

        expect(navPage.wolverineModalBody.isPresent()).toBeTruthy()
        expect(navPage.wolverineModalBody.getText()).toEqual('Wolverine made his first comic book appearance in 1974.')

        expect(navPage.wolverineModalCloseBtn.isPresent()).toBeTruthy()
        expect(navPage.wolverineModalXBtn.isDisplayed()).toBe(true)

        navPage.wolverineModalCloseBtn.click()

    })
    it('should display and close Spider-Man modal', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()

        navPage.heroFactsLnk.click()
        navPage.spidermanOpt.click()

        browser.sleep(1000)

        expect(navPage.spidermanModalTitle.isPresent()).toBeTruthy()
        expect(navPage.spidermanModalTitle.getText()).toEqual('Spider-Man Fact')

        expect(navPage.spidermanModalBody.isPresent()).toBeTruthy()
        expect(navPage.spidermanModalBody.getText()).toEqual('Spider-Man was created by Stan Lee and Steve Ditko and first appeared in 1962.')

        expect(navPage.spidermanModalCloseBtn.isPresent()).toBeTruthy()
        expect(navPage.spidermanModalXBtn.isDisplayed()).toBe(true)

        navPage.spidermanModalCloseBtn.click()
    })

    it('should display login page without email and pass', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()

        navPage.logoutLnk.click()
        expect(loginPage.emailField.getText()).toEqual('')
        expect(loginPage.passwordField.getText()).toEqual('')
    })
    it('should display login page with email and pass', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.rememberChk.click()
        loginPage.submitBtn.click()

        navPage.logoutLnk.click()
        expect(loginPage.emailField.getAttribute('value')).toEqual('test@test.com')
        expect(loginPage.passwordField.getAttribute('value')).toEqual('pass')
        expect(loginPage.rememberChk.isSelected()).toBe(true)

    })
    it('should display alert for not found', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()

        navPage.searchFld.sendKeys('Bob')
        navPage.searchBtn.click()

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 3000)

        expect(browser.switchTo().alert().getText()).toEqual('Your search for Bob returned 0 results. Try something else.')
        browser.switchTo().alert().accept()
    })
    it('should display alert for found', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()

        navPage.searchFld.sendKeys('Wolverine')
        navPage.searchBtn.click()

        var EC = protractor.ExpectedConditions
        browser.wait(EC.alertIsPresent(), 3000)

        expect(browser.switchTo().alert().getText()).toEqual('Wolverine is awesome')
        browser.switchTo().alert().accept()
    })
})