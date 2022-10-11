Feature: users
    Background:
        Given users exist:
        | name          | email               | password          | type  |
        | Ole           | olfs@skivecollege.dk| Diplom#Admin-2022 | admin |
        | Kent          | kent@epassiona.com  | Diplom#2022       | user  |
        Given Ole is administrator
        And Ole is logged in
        And Ole should see the 'Users' page

    Scenario: Create user
        When Ole click on 'Create new'
        Then Ole should see the 'Create' page
        When Ole fill in the field 'name' value 'Tom'
        And Ole fill in the field 'email' value 'tom@epassions.com'
        And Ole fill in the field 'password' value 'Diplom#2022'
        And Ole fill in the field 'repeat_password' value 'Diplom#2022'
        Then Ole should see 'Bruger Tom er oprettet'

    Scenario: Create user that allready exist
        When Ole click on 'Create new'
        Then Ole should see the 'Create' page
        When Ole fill in the field 'name' value 'Kent'
        And Ole fill in the field 'email' value 'Kent@epassions.com'
        And Ole fill in the field 'password' value 'Diplom#2022'
        And Ole fill in the field 'repeat_password' value 'Diplom#2022'
        Then Ole should see 'Bruger Tom er allerede oprettet'

    Scenario: Create user with non matching password in 'password field' and 'repeat password'
        When Ole click on 'Create new'
        Then Ole should see the Create page
        When Ole fill in the field 'name'
        And Ole fill in the field 'email'
        And Ole fill in the field 'password'
        And Ole fill in non matching entry in field 'repeat password'
        Then Ole should be see 'Adgangskoder matcher ikke, prøv igen'

    Scenario: Create user with invalid email
        When Ole click on 'Create new'
        Then Ole should see the Create page
        When Ole fill in the field 'first name'
        And Ole fill in the field 'lastname'
        And Ole fill in the field 'email' with an invalid email
        Then Ole should see 'Ugyldig email'

    Scenario: Delete Kent
        When Ole have selected user Kent
        And Ole click on 'Delete'
        Then the user Kent should be deleted
    
    Scenario: Delete last user (the last administrator) fail
        When Ole try to delete Ole
        Then Ole should see 'Fejl - kan ikke slette den sidste administrator'