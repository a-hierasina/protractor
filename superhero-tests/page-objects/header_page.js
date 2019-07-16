var HeaderPage = function () {}

HeaderPage.prototype = Object.create({},{
    headerTitle: {get: function () { return element(by.css('.container-fluid h1'))}},
    headerImage: {get: function () { return element(by.css('.container-fluid img'))}},
    headerBody: {get: function () { return element(by.css('.container-fluid p'))}}

})

module.exports = HeaderPage