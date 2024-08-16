document.querySelector(".Colosseum").src = "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg";
document.querySelector(".Taj_Mahal").src = "https://media.istockphoto.com/id/519330110/tr/foto%C4%9Fraf/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=kAPnLgItMrC8pSZoSdMTYCDj3E9Qk_ZPwW0LG1JARbc=";
document.querySelector(".Eiffel_Tower").src = "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/2e/16/f8.jpg";
document.querySelector(".Great_Wall_of_China").src = "https://exodus-website.s3.amazonaws.com/uploads/2021/12/34508-1024x676.jpg";
document.querySelector(".Statue_of_Liberty").src = "https://www.worldatlas.com/upload/f4/d8/7b/shutterstock-1397031029.jpg";
document.querySelector(".Giza_pyramid_complex").src = "https://images.memphistours.com/large/292849827_giza%20pyramids%20(4).jpg";

let attractions = {
    Colosseum: { name: 'Colosseum', country: 'Italy', city: 'Rome' },
    Taj_Mahal: { name: 'Taj Mahal', country: 'India', city: 'Agra' },
    Eiffel_Tower: { name: 'Eiffel Tower', country: 'France', city: 'Paris' },
    Great_Wall_of_China: { name: 'Great Wall of China', country: 'China', city: 'Beijing' },
    Statue_of_Liberty: { name: 'Statue of Liberty', country: 'United States of America', city: 'New York City' },
    Giza_pyramid_complex: { name: 'Giza pyramid complex', country: 'Egypt', city: 'Giza' }
};

document.querySelector(".Colosseum").addEventListener('click', () => click_handler(attractions.Colosseum));
document.querySelector(".Taj_Mahal").addEventListener('click', () => click_handler(attractions.Taj_Mahal));
document.querySelector(".Eiffel_Tower").addEventListener('click', () => click_handler(attractions.Eiffel_Tower));
document.querySelector(".Great_Wall_of_China").addEventListener('click', () => click_handler(attractions.Great_Wall_of_China));
document.querySelector(".Statue_of_Liberty").addEventListener('click', () => click_handler(attractions.Statue_of_Liberty));
document.querySelector(".Giza_pyramid_complex").addEventListener('click', () => click_handler(attractions.Giza_pyramid_complex));

function click_handler(attraction) {
    let { name, country, city } = attraction;
    let information = `Name of attraction: ${name}<br>
                       Country of attraction: ${country}<br>
                       City of attraction: ${city}`;
    document.getElementById("information").innerHTML = information;
}

const SevenWondersAncientWorld = ['Great Pyramid of Giza', 'Hanging Gardens of Babylon', ' Temple of Artemis', ' Statue of Zeus at Olympia', '  Mausoleum at Halicarnassus', 'Colossus of Rhodes', 'Lighthouse of Alexandria'];
const SevenWondersMiddleAges = ['Catacombs of Kom El Shoqafa', 'Colosseum', 'Great Wall of China', 'Hagia Sophia', 'Leaning Tower of Pisa', 'Porcelain Tower of Nanjing', 'Stonehenge'];

let AllWonders;

document.getElementById("AllWonders").innerHTML = AllWonders;

const TouristAttractionsBelgium = ['Gravensteen', 'Basilica of the Holy Blood', 'Citadelle de Dinant', 'Bouillon Castle', 'Grand Place', 'Manneken Pis', 'Atomium'];

const [GhentAttraction1, BrugesAttraction1, DinantAttraction1, BouillonAttraction1, ...BrusselsAttractions] = TouristAttractionsBelgium;

document.getElementById("TouristAttractionsBelgium").innerHTML = TouristAttractionsBelgium;
document.getElementById("BrusselsAttractions").innerHTML = BrusselsAttractions;

async function array_connect(first_array, second_array) {
    return [...first_array, ...second_array];
}

array_connect(SevenWondersAncientWorld, SevenWondersMiddleAges).then(
    result => {
        AllWonders = result;
        document.getElementById("AllWonders").innerHTML = AllWonders;
    });

(async function more_attractions_brussels() {
    let getMoreAttractions = new Promise((resolve) => {
        setTimeout(() => resolve(['Royal Palace of Brussels', 'Royal Gallery of Saint Hubert', 'Mount of the Arts', 'Mini-Europe']), 1000)
    });

    let moreAttractions = await getMoreAttractions;
    document.getElementById("MoreAttractions").innerHTML = `More tourist attractions in Brussels are: ${moreAttractions} .`;

})();

let result;
let baseurl = 'https://raw.githubusercontent.com/melikenur16/WebAdvanced/main/ImportantCities.json';

let fetchCities = async () => {
    let response = await fetch(baseurl);
    result = await response.json();

    let citiesHTML = '';
    for (let city of result) {
        citiesHTML +=
            `<div class="city">
                <img src="${city.image}" alt="img${city.name.replace(/ /g, '')}">
                <p>City: ${city.name}<br>Country: ${city.country}</p>
            </div>`;
    }
    document.getElementById('ImportantCities').innerHTML = citiesHTML;
};

fetchCities();
