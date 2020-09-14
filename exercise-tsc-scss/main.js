/*
    TODO 1: Create a TypeScript "Hero" interface.
    Each hero should have the following properties.
    name: string;
    image: string;
 */

/*
    TODO 2: type the hero constants to be of type Hero[]
 */
const heroes = [
    {name: 'Batman', image: 'batman.jpeg'},
    {name: 'Spiderman', image: 'spiderman.jpeg'},
    {name: 'Superman', image: 'superman.jpeg'}
];

const previousHeroBtn = document.getElementById('previous-hero-btn');
const nextHeroBtn = document.getElementById('next-hero-btn');
/*
    TODO 3: Use the "as" operator to cast the heroImage to HTMLImageElement
 */
const heroImage = document.getElementById('hero-image');
/*
    TODO 4: Use the "as" operator to cast the heroTitle to HTMLTitleElement
 */
const heroTitle = document.getElementById('hero-title');

/*
    TODO 5: Here we don't need to add the type since TypeScript is able
     to automatically infer the type
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
    TODO 6: Use optional chaining (the ? operator) to ensure handle the case that
    the previousHeroBtn is null
 */
previousHeroBtn?.addEventListener('click', selectPreviousHero);
/*
    TODO 7: Use optional chaining (the ? operator) to ensure handle the case that
    the previousHeroBtn is null
 */
nextHeroBtn?.addEventListener('click', selectNextHero);
updateHero();

/*
    TODO 8: Head back to the README.md
 */
