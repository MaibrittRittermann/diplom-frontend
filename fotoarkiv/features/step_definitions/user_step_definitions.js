const {Given, When, Then, Before} = require('@cucumber/cucumber'); 
const {assertThat, is} = require('hamjest');
const {saveUser} = require('../../src/services/userService');
const {getCurrentUser} = require('../../src/services/loginService');

Given('users exist:', function async (dataTable) {
    dataTable.hashes().map(async (user) => {
      this.users[user.name] = await saveUser({
        name : user.name, 
        email : user.email, 
        password : user.password, 
        isAdmin : user.isAdmin});
    });
  });

  Given('{user} is administrator', function (user) {
    return user.isAdmin;
  });

  Given('{user} is logged in', function (user) {    
    return getCurrentUser().email === user.email;
  });

  Given('{user} should see the {string} page', function (user, string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('{user} click on {string}', function (user, string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('{user} fill in the field {string}', function (user, string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('{user} fill in matching password in the field {string}', function (user, string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('new user {user} is created', function (user) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('{user} fill in the field {string} with an invalid email', function (user, string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });



  When('{user} have selected user {user}', function (user, user2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('the user {user} should be deleted', function (user) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('{user} try to delete {user}', function (user, user2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

 