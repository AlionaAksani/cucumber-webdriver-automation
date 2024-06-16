const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('input[data-test="login-button"]');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    get errorMessage () {
        return $('[data-test="error"]');
    }

    get buttons(){
        return new {
            'login': this.btnLogin
        }
    }

    open () {
        return super.open('');
    }
}

module.exports = new LoginPage();
