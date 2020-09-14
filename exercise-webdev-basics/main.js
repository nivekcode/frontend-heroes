/*
    Todo 1: Create an array of hero objects.
    Each hero is an object containing a name and an image.
    The name is the title that will be displayed and the image is the name of the image.
 */
const heroes = [];

/*
    TODO 2: Use document.getElementById() to query the 'previous-hero-btn'
 */
const previousHeroBtn = 'REPLACE_ME';
/*
    TODO 3: Use document.getElementById() to query the 'next-hero-btn'
 */
const nextHeroBtn = 'REPLACE_ME';
/* TODO 4: Use document.getElementById() to query the 'hero-image'
 */
const heroImage = 'REPLACE_ME';
/*
    TODO 5: Use document.getElementById() to query the 'hero-title'
 */
const heroTitle = 'REPLACE_ME';

// TODO 6: Set the initial value of the selectedHeroIndex to 0
let selectedHeroIndex = 'REPLACE_ME';

const selectPreviousHero = () => {
    /* TODO 7: This method is called when we click the previous button.
        Once the button is clicked we need to adjust the selectedHeroIndex
        based on the following cirteria:

        1. If the selectedHeroIndex is 0 it should be set to the
        last index of the hero array
        2. If the selectedHeroIndex is not 0. It should be decremented

     */
    updateHero();
}

const selectNextHero = () => {
    /* TODO 8: This method is called when we click the next button.
        Once the button is clicked we need to adjust the selectedHeroIndex based on the following cirteria:

        1. If the selectedHeroIndex is equal to the last last index of the hero
        array we should set it to 0
        2. If the selectedHeroIndex is not equal to the length of the heroes
        array it should be incremented

     */
    updateHero();
}

const updateHero = () => {
    /*
        TODO 9: set the innerText of the heroTitle to the name of the hero at the
         selectedHeroIndex position.
     */
    /*
        TODO 10: set the src of the heroImage to the name of the hero
         at the selectedHeroIndex position. Also use string concatination
         to prefix the value with './assets'
     */
};

/*
 TODO 11: use the addEventListeners method on the previousHeroBtn
 to register the selectPreviousHero as a click handler.
 Hint: addEventListener('click', selectPreviousHero);
 */

/*
 TODO 12: use the addEventListeners method on the nextHeroBtn
 to register the selectNextHero as a click handler.
 Hint: addEventListener('click', selectNextHero);
 */
updateHero();
/*
  TODO 13: Check out the result. You should now be able to change
  the hero by clicking on the previous and next button.
 */
