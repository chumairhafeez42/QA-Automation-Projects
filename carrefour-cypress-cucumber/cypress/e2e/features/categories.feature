Feature: Category Pages
  As a shopper on Carrefour UAE
  I want every category page to load correctly
  So that I can browse products within any department

  @smoke
  Scenario: All Categories directory page loads
    Given I am on the Carrefour UAE homepage
    When I open the "Categories" header link
    Then I should be on the all-categories directory page
    And the directory page should list category links

  # Data-driven: every top-level category currently exposed on the homepage
  # nav bar (see cypress/fixtures/categories.json for the source list).
  @regression @all-categories
  Scenario Outline: "<categoryName>" category page loads with content
    When I visit the "<categoryName>" category page directly
    Then the category page should render successfully
    And the category page should not show a broken error screen

    Examples:
      | categoryName        |
      | Low Prices           |
      | Dairy & Eggs          |
      | Fruit                 |
      | Vegetables            |
      | Pantry Staples        |
      | Meat & Seafood        |
      | Beverages             |
      | Snacks                |
      | Frozen Food           |
      | Bakery                |
      | Fashion               |
      | Healthy & Organic     |
      | Health & Fitness      |
      | Pet Supplies          |
      | Large Appliances      |
      | Small Appliances      |
      | Mobiles & Wearables   |
      | TVs & Projectors      |
      | Laptops               |
      | Cameras               |
      | Gaming                |
      | Cleaning & Laundry    |
      | Beauty                |
      | Baby Care             |
      | Home & Garden         |
      | Fragrances            |
      | Toys & Outdoor        |
      | Luggage               |

  @regression
  Scenario: Full category sweep from fixture data reports pass/fail per category
    Given I sweep every category defined in the categories fixture
    Then all visited category pages should have loaded without a broken error screen

  @regression
  Scenario: A representative category page supports sorting
    When I visit the "Beverages" category page directly
    And products are present on the page
    Then I should be able to change the sort order without an error
