/*
    Todo 1: Create an array of hero objects.
    Each hero is an object containing a "name" and an "image" properties.
    The "name" is the title that will be displayed to the users
    and the "image" which should contain the full image file name (they can be found in the "assets/" folder).
 */
const heroes = [];

/*
    TODO 2: Use document.querySelector() to query the button with 'previous-hero-btn' id (hint: id selectors are prefixed with #)
 */
const previousHeroBtn = 'REPLACE_ME';
/*
    TODO 3: Use document.querySelector() to query the button with 'next-hero-btn' id (hint: id selectors are prefixed with #)
 */
const nextHeroBtn = 'REPLACE_ME';
/* TODO 4: Use document.querySelector() to query the element with 'hero-image' id (hint: id selectors are prefixed with #)
 */
const heroImage = 'REPLACE_ME';
/*
    TODO 5: Use document.querySelector() to query the the element 'hero-title' id
 */
const heroTitle = 'REPLACE_ME';

// TODO 6: Set the initial value of the selectedHeroIndex to 0
let selectedHeroIndex = 'REPLACE_ME';

const selectPreviousHero = () => {
    /* TODO 7: This method is called when we click the previous button.
        Once the button is clicked we need to adjust the selectedHeroIndex
        based on the following criteria:

        1. If the selectedHeroIndex is 0 it should be set to the
        last index of the hero array
        2. If the selectedHeroIndex is not 0. It should be decremented

     */
    updateHero();
}

const selectNextHero = () => {
    /* TODO 8: This method is called when we click the next button.
        Once the button is clicked we need to adjust the selectedHeroIndex based on the following criteria:

        1. If the selectedHeroIndex is equal to the last last index of the hero
        array we should set it to 0
        2. If the selectedHeroIndex is not equal to the length of the heroes
        array it should be incremented

     */
    updateHero();
}

const updateHero = () => {
    /*
        TODO 9: set the "innerText" property of the element previously stored "heroTitle" variable
         to the name of the hero at the selectedHeroIndex position.
     */
    /*
        TODO 10: set the "src" of the "heroImage" to the value of the "image" property value
         of the hero object (stored in the "heroes" array)
         at the "selectedHeroIndex" index. Also use string concatenation
         to prefix the "image" value with './assets' (to get the full path to the image)
     */
};

/*
 TODO 11: use the "addEventListener" method on the element
 previously stored in the "previousHeroBtn" variable
 to register the "selectPreviousHero" function as a click handler.
 Hint: addEventListener('click', selectPreviousHero);
 */

/*
 TODO 12: use the "addEventListener" method on the element
 previously stored in the "nextHeroBtn" variable
 to register the selectNextHero as a click handler.
 Hint: addEventListener('click', selectNextHero);
 */
updateHero();
/*
  TODO 13: Check out the result in the browser. You should now be able to change
  the displayed hero by clicking on the previous and next button.
 */
