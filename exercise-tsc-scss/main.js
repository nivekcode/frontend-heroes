/*
    TODO 1: Create a TypeScript "Hero" interface.
    The "interface" defines the two properties.
    {
        name: string;
        image: string;
    }
 */

/*
    TODO 2: type the hero constants to be of type Hero[] (const heroes: []Hero = ...)
 */
/*
    TODO 3: Once you typed the heroes constant try to remove the image from Batman. Check out the
    error message your editor is displaying.
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
    TODO 7: Use optional chaining (the ? operator) to ensure handle the case that
    the "previousHeroBtn" is not "null".(previousHeroBtn?.addEventListener...)
 */
previousHeroBtn.addEventListener('click', selectPreviousHero);
/*
    TODO 7: Use optional chaining (the ? operator) to ensure handle the case that
    the "nextHeroBtn" is not null (nextHeroBtn?.addEventListener...)
 */
nextHeroBtn.addEventListener('click', selectNextHero);
updateHero();

/*
    TODO 8: Hop back to the README.md and continue with the next steps.
 */
