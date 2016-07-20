import {Config} from './../Config'

import rest = require("rest");

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('The github api', () => {

    it('should list the services', () => {
        var response = rest({
            path: Config.githubBaseUrl,
            headers: {
                'User-Agent':'Awesome-Octocat-App'
            }
        });

        return Promise.all([
            expect(response.status()).to.eventually.equal(200),
            expect(response.entity().then(JSON.parse)).to.eventually.have.property('current_user_url').equal('https://api.github.com/user')
        ]);
    });

});