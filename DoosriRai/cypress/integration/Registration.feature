Feature: Registration

    Scenario: Registration with doctor with valid credentials
        Given doctor user should be present on Registration page
        When  user provides valid credentials for doctor and clicks On login button
        Then  user should get navigated to doctor's Dashboard

    Scenario: Registration with patient with valid credentials
        Given patient user should be present on Registration page
        When  user provides valid credentials for patient and clicks On login button
        Then  user should get navigated to patient's Dashboard

    Scenario: Registration with doctor with Invalid credentials
        Given doctor user should be present on Registration page
        When  User provides Invalid credentials for doctor and clicks On login button
        Then  user should not get navigated to doctor's Dashboard

    Scenario: Registration with patient with Invalid credentials
        Given patient user should be present on Registration page
        When  User provides Invalid credentials for patient and clicks On login button
        Then  user should not get navigated to patient's Dashboard


    Scenario: Registration with doctor with Existing Email address
        Given doctor user should be present on Registration page
        When  User provides Existing Email address for doctor and clicks On login button
        Then  user should not get navigated to doctor's Dashboard

    Scenario: Registration with patient with Existing Email address
        Given patient user should be present on Registration page
        When  User provides Existing Email address for patient and clicks On login button
        Then  user should not get navigated to patient's Dashboard