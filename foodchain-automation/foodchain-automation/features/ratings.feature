@ratings
Feature: Food Ratings
  As a customer
  I want to rate and review foods I have ordered
  So that other customers and the business can see quality feedback

  Background:
    Given I sign in with the "customer" account
    And I am on the ratings page

  @smoke
  Scenario: Successfully submit a 5-star rating with a review
    When I rate the food "Margherita Pizza" with 5 stars and review "Fresh and delicious!"
    Then I should see the rating success message "Thank you for your review"
    And the average rating for food "margherita-pizza" should update

  Scenario: Submit a rating without a written review
    When I rate the food "Veggie Burger" with 4 stars and no review
    Then I should see the rating success message "Thank you for your review"

  Scenario Outline: Rating requires a star selection between 1 and 5
    When I attempt to rate the food "<food>" with an invalid star value "<stars>"
    Then I should see the rating error "Please select a rating between 1 and 5 stars"

    Examples:
      | food          | stars |
      | Caesar Salad  | 0     |
      | Caesar Salad  | 6     |

  Scenario: A customer cannot rate the same food order twice
    Given I have already rated the food "Chicken Wrap" for my last order
    When I rate the food "Chicken Wrap" with 3 stars and review "It was okay"
    Then I should see the rating error "You have already rated this order"

  Scenario: Average rating recalculates after a new review
    Given the food "Sushi Platter" has an average rating of "4.0" from 10 reviews
    When I rate the food "Sushi Platter" with 5 stars and review "Best sushi in town"
    Then the average rating for food "sushi-platter" should update
