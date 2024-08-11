document.querySelector(".Colosseum").src = "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg";
document.querySelector(".Taj_Mahal").src = "https://th-thumbnailer.cdn-si-edu.com/eBP1w0wGm1n7tZ4XtovPdnvxDOg=/800x800/filters:focal(1471x1061:1472x1062)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg";
document.querySelector(".Eiffel_Tower").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg";
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

const SevenWondersAncientWorld = ['Great Pyramid of Giza','Hanging Gardens of Babylon', ' Temple of Artemis', ' Statue of Zeus at Olympia', '  Mausoleum at Halicarnassus', 'Colossus of Rhodes', 'Lighthouse of Alexandria'];
const SevenWondersMiddleAges = ['Catacombs of Kom El Shoqafa','Colosseum', 'Great Wall of China','Hagia Sophia','Leaning Tower of Pisa','Porcelain Tower of Nanjing','Stonehenge'];

const AllWonders = [...SevenWondersAncientWorld, ...SevenWondersMiddleAges];

document.getElementById("AllWonders").innerHTML = AllWonders;
