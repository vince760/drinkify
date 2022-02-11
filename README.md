# UI Coding Exercise #

The purpose of this exercise is to test your familiarity with full-stack development. You'll be building a small cocktail drinks listing app using frameworks of your choice and the Cocktaildb public API.

### Functional Requirements ###

* The user should be presented with a cocktail drink listing page where the user can search with an input field and a search button
* In the listing page, present any information from the JSON, which you think would be useful for a user
* Clicking the search button triggers a search to the the cocktaildb's API and displays the results on the screen
* Clicking on the item in the listing or search results, user is presented with the details of that drink
* The results should be sortable by name
* List can be filtered by category or glass


### System Requirements ###

* The client-side application can be written in any Javascript framework
* You may use any additional libraries that you see fit
* UI should be presentable(Be creative)


### API’s to be called ###

* Listing: 
https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m
* Search by name: 
https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m
* Details by id: 
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=~~11007~~
* Filter by Category:
https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=~~Ordinary_Drink~~
* Filter by Glass:
https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=~~Cocktail_glass~~

## All the ~~strikethrough~~ text will be replaced by the product id or the filter type user clicks. ##


### Non-Requirements ###

* Security measures, including user authentication / authorization 
* Unit testing
* UX
* Logging

### Misc Notes ###

* Be sure to document your code, especially cases where you might have made a different choice in a 'real' application
* API page: https://www.thecocktaildb.com/api.php 
* Upon completion, be sure that your code is accessible through a git repo, and provide the link to that repo to OliSystems
# drinkify
