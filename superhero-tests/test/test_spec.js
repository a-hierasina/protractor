var TestPage = require('../page-objects/test_page')

describe('Super Hero Page', function(){
    var testPage

    //Before each test case. Do smth
    beforeEach(function () {
        testPage = new TestPage()

        browser.ignoreSynchronization = true
        //Open URL
        browser.get('http://localhost:63342/protractor/superhero/index.html')
    });

    //After each test case. Do smth
    afterEach(function () {

    });

    it('should load the correct URL', function () {
        //Enter Text into fields
        testPage.emailFld.sendKeys('Just Testing')
        testPage.passwordFld.sendKeys('password')

        //Verify stuff
        expect(testPage.loginTitleTxt.getText()).toEqual('Welcome. Please Log In.')
        expect(testPage.loginTitleTxt.getText()).toContain('Welcome')
        expect(testPage.emailFld.getAttribute('value')).toEqual('Just Testing')

        // browser.sleep(5000)
    })
});