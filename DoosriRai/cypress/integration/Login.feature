Feature: Login


    Scenario: Login with doctor with valid credentials
        Given doctor user should be present on login page
        When  doctor user provides valid credentials for doctor and clicks On login button
        Then  doctor user should get navigated to doctor's Dashboard


    Scenario: Login with patient with valid credentials
        Given patient user should be present on login page
        When  patient user provides valid credentials for patient and clicks On login button
        Then  patient user should get navigated to patient's Dashboard

    Scenario: Login with doctor with valid credentials from  home page
        Given doctor user should be present on home page
        When  doctor user provides valid credentials for doctor and clicks On login button on homepage
        Then  doctor user should get navigated to doctor's Dashboard

    Scenario: Login with patient with valid credentials from  home page
        Given patient user should be present on home page
        When  patient user provides valid credentials for patient and clicks On login button on homepage
        Then  patient user should get navigated to patient's Dashboard

    Scenario: Login with patient with Invalid credentials
        Given patient user should be present on login page
        When  patient user provides Invalid credentials for patient and clicks On login button
        Then  patient user should Stay on login page

    Scenario: Login with doctor with Invalid credentials
        Given doctor user should be present on login page
        When  doctor User provides Invalid credentials for doctor and clicks On login button
        Then  doctor user should Stay on login page
