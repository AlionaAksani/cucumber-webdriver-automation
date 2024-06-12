const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('button[data-test="login-button"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    open () {
        return super.open('');
    }

    async checkErrorMessage(errorMessage) {
        await expect('')
    }
}

module.exports = new LoginPage();
