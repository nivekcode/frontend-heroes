const heroes = [
    {name: 'Batman', image: 'batman.jpeg'},
    {name: 'Spiderman', image: 'spiderman.jpeg'},
    {name: 'Superman', image: 'superman.jpeg'}
];
const previousHeroBtn = document.getElementById('previous-hero-btn');
const nextHeroBtn = document.getElementById('next-hero-btn');
const heroImage = document.getElementById('hero-image');
const heroTitle = document.getElementById('hero-title');

let selectedHero = 0;

const updateHero = (index) => {
    heroTitle.innerText = heroes[index].name;
    heroImage.src = heroes[index].image;
};

previousHeroBtn.addEventListener('click', function () {
    if(selectedHero === 0){
        selectedHero = heroes.length - 1;
    } else {
        selectedHero--;
    }
    updateHero(selectedHero);
});

nextHeroBtn.addEventListener('click', function () {
    if(selectedHero === heroes.length -1){
        selectedHero = 0;
    } else {
        selectedHero++;
    }
    updateHero(selectedHero);
});
