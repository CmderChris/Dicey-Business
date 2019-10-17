# Dicey Business

This lab will combine principles of:
  * HTML 
  * CSS 
  * JavaScript 
  * Accessing, creating and modifying HTML elements via the DOM
  * Object Oriented Programming

## General Requirements

1. You **must** use OOP. Create a Class named `Die` that represents a single die.
2. Your class **must** have a Property named `value`.
3. Your class **must** have a Method named `roll` that...
  * Generates a random Integer between 1 and 6.
  * Sets the `value` Property.
  * Updates the `div` on the page with the new value.
4. When a new `Die` Object is created, it should automatically... 
  * Create a `div` element .
  * Call its `roll()` Method.
  * Puts the `div` element on the screen.
5. You can use either the DOM or JQuery, but be consistent and stick with **only** one!

## Getting Started

6. Create the following in your source folder:
  * An `index.html` file.
  * A `scripts.js` file.
  * A `styles.css` file.
7. Implement the objectives of the lab as follows:
  * The page **must** contain a `button` labeled "Generate Die". 
    * Put this in your `index.html` file. 
  * Clicking the `button` should create a new `Die` Object, causing a `div` to be added to the screen with a random Integer between 1 and 6.
  * The dice should show up on your page in a grid (similar to the layout of the 'DOM DOM DOMMMMMMM' Lab).
  * The page **must** contain a `button` labeled "Roll Dice", which should call the `roll()` Method on **all** of the dice, updating their values.

### Hints

8. You can set a Property on your `Die` Object that holds the `div` representing the `Die` Object on the page.
9. You will want to store each `Die` Object you create in a global array. 
  * This will be helpful when it comes time to roll all of the dice.
10. Clicking the "Roll Dice" `button` can loop through the global array. 
  * This is where you will have access to the Properties and Methods of each `Die` Object.

### Above and Beyond
* Try extending the functionality of this lab to support the following features. 
  * They are listed in order from easiest to hardest to implement. 

11. Create a `sumDice()` Function
  * Add a `button` that triggers it. 
  * It should add up the current face value of all the dice on the page and display an `alert` with the sum.
  * Be careful to take appropriate measures so that the `sumDice()` Function still reports the *correct* sum **after** you delete a `Die`! 
12. Add a feature where clicking on a `Die` Object on the page causes **just** that one `Die` to roll, updating its face value.
13. Add a feature where double clicking on a `Die` Object on the page causes that `Die` Object to be removed from the page.
  * You need to not **only** remove the on-screen representation of the `Die` on the screen, but *also* remove the `Die` object from the array as well!