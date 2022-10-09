const {Given, When, Then, Before} = require('@cucumber/cucumber'); 
const {assertThat, is} = require('hamjest');

Given('users exist:', function (dataTable) {
    // dataTable.hashes().map((user) => {
    //   this.users[user.name] = new User({
    //     name : user.name, 
    //     email : user.email, 
    //     password : user.password, 
    //     isAdmin : user.isAdmin});
    // });
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Given('{user} is administrator', function (user) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Given('{user} is logged in', function (user) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Given('{user} is in the {string} dashboard', function (user, string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('{user} click on {string}', function (user, string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('{user} should see the Create page', function (user) {
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

 