var LoginPage = require('../page-objects/login_page')
var VotePage = require('../page-objects/vote_page')

describe('Vote Tests', function () {
    var loginPage
    var votePage

    beforeEach(function () {
        loginPage = new LoginPage()
        votePage = new VotePage()

        browser.ignoreSynchronization = true
        browser.get('http://localhost:63342/protractor/superhero/index.html')

    })
    afterEach(function () {

    })

    it('should display all voting section elements', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()

        expect(votePage.voteTitleTxt.isDisplayed()).toBe(true)
        expect(votePage.voteTitleTxt.getText()).toEqual('Vote for your favorite Superhero movie')

        //expect(votePage.xmenRadio.isPresent()).toBeTruthy(true)
        expect(votePage.xmenRadio.isDisplayed()).toBe(true);
        expect(votePage.xmenRadioLbl.isDisplayed()).toBe(true)
        expect(votePage.xmenRadioLbl.getText()).toEqual('X-Men')

        expect(votePage.avengersRadio.isDisplayed()).toBe(true)
        expect(votePage.avengersRadioLbl.isDisplayed()).toBe(true)
        expect(votePage.avengersRadioLbl.getText()).toEqual('Avengers')

        expect(votePage.deadpoolRadioLbl.isDisplayed()).toBe(true)
        expect(votePage.deadpoolRadioLbl.getText()).toEqual('Deadpool')

        expect(votePage.spidermanRadioLbl.isDisplayed()).toBe(true)
        expect(votePage.spidermanRadioLbl.getText()).toEqual('Spider-Man Homecoming')

        expect(votePage.ironmanRadioLbl.isDisplayed()).toBe(true)
        expect(votePage.ironmanRadioLbl.getText()).toEqual('Iron Man')

        expect(votePage.submitBtn.isDisplayed()).toBe(true)

        expect(votePage.movieLbl.isDisplayed()).toBe(true)
        expect(votePage.movieLbl.getText()).toEqual('Movie')

        expect(votePage.voteLbl.isDisplayed()).toBe(true)
        expect(votePage.voteLbl.getText()).toEqual('Votes')

        expect(votePage.xmenLbl.isDisplayed()).toBe(true)
        expect(votePage.xmenLbl.getText()).toEqual('X-Men')

        expect(votePage.xmenVal.isDisplayed()).toBe(true)
        expect(votePage.xmenVal.getText()).toEqual('10')

        expect(votePage.avengersLbl.isDisplayed()).toBe(true)
        expect(votePage.avengersLbl.getText()).toEqual('Avengers')

        expect(votePage.avengersVal.isDisplayed()).toBe(true)
        expect(votePage.avengersVal.getText()).toEqual('5')

        expect(votePage.deadpoolLbl.isDisplayed()).toBe(true)
        expect(votePage.deadpoolLbl.getText()).toEqual('Deadpool')

        expect(votePage.deadpoolVal.isDisplayed()).toBe(true)
        expect(votePage.deadpoolVal.getText()).toEqual('22')

        expect(votePage.spidermanLbl.isDisplayed()).toBe(true)
        expect(votePage.spidermanLbl.getText()).toEqual('Spider-Man Homecoming')

        expect(votePage.spidermanVal.isDisplayed()).toBe(true)
        expect(votePage.spidermanVal.getText()).toEqual('12')

        expect(votePage.ironmanLbl.isDisplayed()).toBe(true)
        expect(votePage.ironmanLbl.getText()).toEqual('Iron Man')

        expect(votePage.ironmanVal.isDisplayed()).toBe(true)
        expect(votePage.ironmanVal.getText()).toEqual('1')

    })
    it('should add 1 to X-men votes', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()

        votePage.submitBtn.click()
        expect(votePage.xmenVal.getText()).toEqual('11')
    })
    fit('should add 1 to Avengers votes', function () {
        loginPage.emailField.sendKeys('test@test.com')
        loginPage.passwordField.sendKeys('pass')
        loginPage.submitBtn.click()

        votePage.avengersRadio.click()
        votePage.submitBtn.click()
        expect(votePage.avengersVal.getText()).toEqual('6')
    })

    it('', function () {

    })

})