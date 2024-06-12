const { browser } = require('@wdio/globals')

module.exports = class Page {
    open (path) {
        return browser.url(`${browser.getHubConfig.baseUrl}/${path}`)
    }
}