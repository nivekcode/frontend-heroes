var heroes = [
    { name: 'Batman', image: 'batman.svg' },
    { name: 'Spiderman', image: 'spiderman.svg' },
    { name: 'Superman', image: 'superman.svg' }
];
var previousHeroBtn = document.querySelector('#previous-hero-btn');
var nextHeroBtn = document.querySelector('#next-hero-btn');
var heroImage = document.querySelector('#hero-image');
var heroTitle = document.querySelector('#hero-title');
var selectedHeroIndex = 0;
var selectPreviousHero = function () {
    selectedHeroIndex = selectedHeroIndex === 0 ? heroes.length - 1 : selectedHeroIndex - 1;
    updateHero();
};
var selectNextHero = function () {
    selectedHeroIndex = selectedHeroIndex === heroes.length - 1 ? 0 : selectedHeroIndex + 1;
    updateHero();
};
var updateHero = function () {
    if (heroTitle) {
        heroTitle.innerText = heroes[selectedHeroIndex].name;
    }
    if (heroImage) {
        heroImage.src = "./assets/".concat(heroes[selectedHeroIndex].image);
    }
};
previousHeroBtn === null || previousHeroBtn === void 0 ? void 0 : previousHeroBtn.addEventListener('click', selectPreviousHero);
nextHeroBtn === null || nextHeroBtn === void 0 ? void 0 : nextHeroBtn.addEventListener('click', selectNextHero);
updateHero();
