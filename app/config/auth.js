'use strict';
console.log(process.env.APP_URL);
module.exports = {
    'gitHubAuth': {
        'clientID': process.env.GITHUB_KEY,
        'clientSecret': process.env.GITHUB_SECRET,
        'callbackURL': process.env.APP_URL + 'auth/github/callback/'
    }
};