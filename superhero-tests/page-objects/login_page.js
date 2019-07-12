// Login Page Objects

var LoginPage = function () {}

LoginPage.prototype = Object.create({},{
    loginTitleTxt: {get: function () { return element(by.id('login-title'))}},
    emailFieldLbl: {get: function () { return element(by.css('#login-form > div:nth-child(1) > label'))}},
    emailField: {get: function () { return element(by.id('loginEmail'))}},
    passwordFieldLbl: {get: function () { return element(by.css('#login-form > div:nth-child(2) > label'))}},
    passwordField: {get: function () { return element(by.id('loginPassword'))}},
    rememberChkLbl: {get: function () { return element(by.css('#login-form > div.form-group.form-check > label'))}},
    rememberChk: {get: function () { return element(by.id('rememberLoginChk'))}},
    submitBtn: {get: function () { return element(by.css('#login-form > button'))}},
    loginErrorMsg: {get: function () { return element(by.id('login-alert'))}}

})

module.exports = LoginPage