const heroes = [
    {name: 'Batman', image: 'batman.jpeg'},
    {name: 'Spiderman', image: 'spiderman.jpeg'},
    {name: 'Superman', image: 'superman.jpeg'}
];
const previousHeroBtn = document.getElementById('previous-hero-btn');
const nextHeroBtn = document.getElementById('next-hero-btn');
const heroImage = document.getElementById('hero-image') as HTMLImageElement;
const heroTitle = document.getElementById('hero-title');

let selectedHero = 0;

const updateHero = (index: number) => {
    if (heroTitle && heroImage) {
        heroTitle.innerText = heroes[index].name;
        heroImage.src = `./assets/${heroes[index].image}`;
    }
};

previousHeroBtn?.addEventListener('click', function () {
    selectedHero = selectedHero === 0 ? heroes.length - 1 : selectedHero - 1;
    updateHero(selectedHero);
});

nextHeroBtn?.addEventListener('click', function () {
    selectedHero = selectedHero === heroes.length - 1 ? 0 : selectedHero + 1;
    updateHero(selectedHero);
});

updateHero(0);
