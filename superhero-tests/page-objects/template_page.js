// Login Page Objects

var LoginPage = function () {}

LoginPage.prototype = Object.create({},{
    elementName: {get: function () { return element(by.id(''))}}

})

module.exports = LoginPage