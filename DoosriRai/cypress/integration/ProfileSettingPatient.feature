Feature:ProfileSettingPatient

    Feature Description
    Background: Login
        Given user should be present on home page
        When  user provides valid credentials and clicks On login button on homepage
        Then  user should get navigated to Dashboard

    Scenario: Changing profile setting of patients profile
        Given user should be present on Dashboard
        When patient user changes the profile details and clicks on save
        Then patient users profile details should get updated


    Scenario: Changing account setting of patient profile
        Given user should be present on Dashboard
        When patient user changes the account details and clicks on save
        Then patient user should be on Login page
        And patient users account details should get updated
