describe('Super Hero Page', function(){
    it('should load the correct URL', function () {
        browser.ignoreSynchronization = true
        browser.get('http://localhost:63342/protractor/superhero/index.html')

        browser.sleep(5000)
    })
})