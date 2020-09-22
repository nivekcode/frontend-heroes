/*
    TODO 1: Create a TypeScript "Hero" interface.
    The "interface" defines the two properties, the "name" and "image" properties
    both of which should be of type "string"...
 */

/*
    TODO 2: type the hero constants to be of type Hero[] (const heroes: Hero[] = ...)
    which will enforce that we will be storing an array fo heroes in our constant
 */

/*
    TODO 3: Once you typed the heroes constant try to remove the "image" property
    from object describing Batman hero. Check out the new error message in your editor
    (the Batman object should have red underline) and fix it...
 */
const heroes = [
    {name: 'Batman', image: 'batman.jpeg'},
    {name: 'Spiderman', image: 'spiderman.jpeg'},
    {name: 'Superman', image: 'superman.jpeg'}
];

const previousHeroBtn = document.querySelector('#previous-hero-btn');
const nextHeroBtn = document.querySelector('#next-hero-btn');
/*
    TODO 4: Use the "as" operator to cast the heroImage to HTMLImageElement.
    This cast gives us better Type assertion and more detailed autocompletion
    The reason for this is that by default the "querySelector" gives us just generic "Element"
 */
const heroImage = document.querySelector('#hero-image');
/*
    TODO 5: Use the "as" operator to cast the heroTitle to HTMLTitleElement
    This cast gives us better Type assertion and more detailed autocompletion
 */
const heroTitle = document.querySelector('#hero-title');

/*
    TODO 6: Here we don't need to add the type since TypeScript is able
     to automatically infer the "number" type.
 */
let selectedHeroIndex = 0;

const selectPreviousHero = () => {
    selectedHeroIndex = selectedHeroIndex === 0 ? heroes.length - 1 : selectedHeroIndex - 1;
    updateHero();
}

const selectNextHero = () => {
    selectedHeroIndex = selectedHeroIndex === heroes.length - 1 ? 0 : selectedHeroIndex + 1;
    updateHero();
}

const updateHero = () => {
    if(heroTitle) {
        heroTitle.innerText = heroes[selectedHeroIndex].name;
    }
    if(heroImage) {
        heroImage.src = `./assets/${heroes[selectedHeroIndex].image}`;
    }
};

/*
    TODO 7: Use optional chaining (the ? operator) to make sure that we handle case
    if the "previousHeroBtn" was "null".(previousHeroBtn?.addEventListener...)
 */
previousHeroBtn.addEventListener('click', selectPreviousHero);
/*
    TODO 7: Use optional chaining (the ? operator) o make sure that we handle case
    if the "nextHeroBtn" was "null" (nextHeroBtn?.addEventListener...)
 */
nextHeroBtn.addEventListener('click', selectNextHero);
updateHero();

/*
    TODO 8: Hop back to the README.md and continue with the next steps.
 */
