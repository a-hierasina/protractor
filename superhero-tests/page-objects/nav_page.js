var NavPage = function () {}

NavPage.prototype = Object.create({},{
    homeLnk: {get: function () { return element(by.css('#navbarSupportedContent > ul > li.nav-item.active > a'))}},
    heroFactsLnk: {get: function () { return element(by.linkText('Hero Facts'))}},
    logoutLnk: {get: function () { return element(by.linkText('Logout'))}},
    wolverineOpt: {get: function () { return element(by.linkText('Wolverine'))}},
    spidermanOpt: {get: function () { return element(by.linkText('Spider-Man'))}},

    wolverineModalTitle: {get: function () { return element(by.id('wolverineModalLabel'))}},
    wolverineModalBody: {get: function () { return element(by.css('#wolverineModal > div > div > div.modal-body'))}},
    wolverineModalXBtn: {get: function () { return element(by.css('#wolverineModal > div > div > div.modal-header > button > span'))}},
    wolverineModalCloseBtn: {get: function () { return element(by.css('#wolverineModal > div > div > div.modal-footer > button'))}},

    spidermanModalTitle: {get: function () { return element(by.id('spidermanModalLabel'))}},
    spidermanModalBody: {get: function () { return element(by.css('#spidermanModal > div > div > div.modal-body'))}},
    spidermanModalXBtn: {get: function () { return element(by.css('#spidermanModal > div > div > div.modal-header > button > span'))}},
    spidermanModalCloseBtn: {get: function () { return element(by.css('#spidermanModal > div > div > div.modal-footer > button'))}},

    searchFld: {get: function () { return element(by.id('search-box'))}},
    searchBtn: {get: function () { return element(by.buttonText('Search'))}}



})

module.exports = NavPage