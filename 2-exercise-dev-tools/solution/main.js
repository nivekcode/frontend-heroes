const heroes = [
    {name: 'Batman', image: 'batman.svg'},
    {name: 'Spiderman', image: 'spiderman.svg'},
    {name: 'Superman', image: 'superman.svg'}
];

const previousHeroBtn = document.getElementById('previous-hero-btn');
const nextHeroBtn = document.getElementById('next-hero-btn');
const heroImage = document.getElementById('hero-image');
/*
This is the second bug - the hero title queries an element with an id
that does not exist on our page. To fix this bug we have to adjust the ID

const heroTitle = document.getElementById('hero-title-blab');
 */
const heroTitle = document.getElementById('hero-title');

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

previousHeroBtn?.addEventListener('click', selectPreviousHero);
nextHeroBtn?.addEventListener('click', selectNextHero);
updateHero();
