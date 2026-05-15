'use strict';

const COUNTRY_DATA = {
  japan: {
    name: 'Japan', country: '🇯🇵',
    img: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1800&q=80',
    desc: 'From ancient temples to neon-lit cities, Japan is a breathtaking fusion of tradition and innovation.',
    currency: '¥ Japanese Yen', language: 'Japanese', bestTime: 'March–May & Sept–Nov', food: 'Sushi, Ramen, Tempura, Matcha',
    visa: 'Visa-free for many countries', timezone: 'JST (UTC+9)',
    tips: [
      { icon: '🚂', text: 'Buy a JR Pass before arriving — it saves significantly on bullet trains.' },
      { icon: '💳', text: 'Carry cash; many smaller shops and restaurants are cash-only.' },
      { icon: '🙏', text: 'Bow slightly when greeting — a sign of respect deeply valued in Japan.' },
      { icon: '🗑️', text: 'Public bins are rare; carry your own bag for trash.' },
    ],
    places: [
      { id: 'fuji',    name: 'Mount Fuji',        img: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?w=600&q=80', rating: 4.9, duration: '1 Day', desc: 'Japan\'s iconic volcano and sacred symbol — hike to the summit for a life-changing sunrise.' },
      { id: 'tokyo',   name: 'Tokyo Tower',        img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80', rating: 4.7, duration: '2–3 hrs', desc: 'A brilliant red lattice tower offering panoramic views of the Tokyo skyline.' },
      { id: 'kyoto',   name: 'Kyoto Fushimi',      img: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=80', rating: 4.9, duration: 'Half Day', desc: 'Walk through thousands of vivid torii gates in one of Japan\'s most spiritual sites.' },
      { id: 'osaka',   name: 'Osaka Castle',       img: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&q=80', rating: 4.6, duration: '3–4 hrs', desc: 'A majestic 16th-century castle surrounded by beautiful gardens and moats.' },
      { id: 'shibuya', name: 'Shibuya Crossing',   img: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=80', rating: 4.8, duration: '1–2 hrs', desc: 'The world\'s busiest intersection — an electrifying symbol of urban Japan.' },
      { id: 'nara',    name: 'Nara Deer Park',     img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80', rating: 4.7, duration: 'Half Day', desc: 'Roam freely with hundreds of friendly deer in this UNESCO-listed ancient capital.' },
    ]
  },
  india: {
    name: 'India', country: '🇮🇳',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1800&q=80',
    desc: 'A kaleidoscope of culture, history, spirituality and flavors that will overwhelm and enchant you.',
    currency: '₹ Indian Rupee', language: 'Hindi, English + 22 Official Languages', bestTime: 'October–March', food: 'Biryani, Butter Chicken, Dosa, Chai',
    visa: 'e-Visa available for most countries', timezone: 'IST (UTC+5:30)',
    tips: [
      { icon: '💧', text: 'Drink only bottled or filtered water during your visit.' },
      { icon: '👗', text: 'Dress modestly at religious sites — cover shoulders and knees.' },
      { icon: '🛺', text: 'Bargain firmly but politely at markets and with auto-rickshaws.' },
      { icon: '🍽️', text: 'Try street food from vendors with high turnover for safety.' },
    ],
    places: [
      { id: 'taj',     name: 'Taj Mahal',          img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80', rating: 5.0, duration: '3–4 hrs', desc: 'The world\'s most celebrated monument of love — an architectural masterpiece in white marble.' },
      { id: 'kerala',  name: 'Kerala Backwaters',  img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80', rating: 4.8, duration: '2 Days', desc: 'Cruise through tranquil lagoons and lush paddy fields on a traditional houseboat.' },
      { id: 'jaipur',  name: 'Jaipur Forts',       img: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&q=80', rating: 4.7, duration: 'Full Day', desc: 'The Pink City\'s magnificent amber forts and palaces tell tales of Rajput glory.' },
      { id: 'varanasi',name: 'Varanasi Ghats',     img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&q=80', rating: 4.6, duration: '1–2 Days', desc: 'Witness the eternal city\'s hypnotic ghats and evening Ganga Aarti ceremony.' },
      { id: 'goa',     name: 'Goa Beaches',        img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80', rating: 4.7, duration: '3+ Days', desc: 'Sun-kissed beaches, Portuguese architecture and vibrant nightlife await.' },
      { id: 'munnar',  name: 'Munnar Tea Gardens', img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80', rating: 4.8, duration: '2 Days', desc: 'Rolling emerald hills blanketed in tea estates — a misty highland paradise.' },
    ]
  },
  switzerland: {
    name: 'Switzerland', country: '🇨🇭',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80',
    desc: 'Impeccably clean, impossibly beautiful — Switzerland is nature and civilization in perfect harmony.',
    currency: 'CHF Swiss Franc', language: 'German, French, Italian, Romansh', bestTime: 'June–September (summer), Dec–Feb (ski)',
    food: 'Fondue, Raclette, Rösti, Swiss Chocolate', visa: 'Schengen visa required for some', timezone: 'CET (UTC+1)',
    tips: [
      { icon: '🎫', text: 'Purchase the Swiss Travel Pass for unlimited trains, buses and boats.' },
      { icon: '💰', text: 'Switzerland is expensive — set a generous daily budget.' },
      { icon: '🏔️', text: 'Book mountain excursions (Jungfraujoch, Titlis) months in advance.' },
      { icon: '🍫', text: 'Visit local chocolatiers — far superior to airport shops.' },
    ],
    places: [
      { id: 'jungfrau', name: 'Jungfraujoch',   img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', rating: 5.0, duration: 'Full Day', desc: 'The "Top of Europe" at 3,454m — glacier views that defy description.' },
      { id: 'interlaken',name: 'Interlaken',    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', rating: 4.8, duration: '2 Days', desc: 'Adventure capital between two lakes with paragliding and skydiving thrills.' },
      { id: 'lucerne',  name: 'Lucerne',        img: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=600&q=80', rating: 4.9, duration: 'Full Day', desc: 'Fairy-tale city with a covered wooden bridge, lion monument and stunning lakeside setting.' },
      { id: 'zermatt',  name: 'Zermatt & Matterhorn', img: 'https://images.unsplash.com/photo-1518560034-edd8e0b49e36?w=600&q=80', rating: 5.0, duration: '2–3 Days', desc: 'Car-free alpine village beneath the iconic pyramidal peak of the Matterhorn.' },
    ]
  },
  france: {
    name: 'France', country: '🇫🇷',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1800&q=80',
    desc: 'The art of living — romance, gastronomy, fashion and culture elevated to an art form.',
    currency: '€ Euro', language: 'French', bestTime: 'April–June, September–October', food: 'Croissants, Coq au Vin, Crêpes, Baguette',
    visa: 'Schengen visa required for some', timezone: 'CET (UTC+1)',
    tips: [
      { icon: '🗼', text: 'Book Eiffel Tower tickets 2–3 months in advance online.' },
      { icon: '🇫🇷', text: 'Greet with "Bonjour" — locals appreciate the effort.' },
      { icon: '🍷', text: 'Lunch is the main meal — set menus (prix fixe) offer great value.' },
      { icon: '👜', text: 'Be vigilant about pickpockets near major tourist sites.' },
    ],
    places: [
      { id: 'eiffel',   name: 'Eiffel Tower',    img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&q=80', rating: 4.9, duration: '2–3 hrs', desc: 'The iron lady of Paris — glittering at night and breathtaking at any hour.' },
      { id: 'louvre',   name: 'Louvre Museum',   img: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=600&q=80', rating: 4.8, duration: 'Half Day', desc: 'The world\'s largest art museum — home to the Mona Lisa and Venus de Milo.' },
      { id: 'versailles',name: 'Palace of Versailles', img: 'https://images.unsplash.com/photo-1561089489-f13d5e730d72?w=600&q=80', rating: 4.9, duration: 'Full Day', desc: 'The Sun King\'s opulent palace and its magnificent formal gardens.' },
      { id: 'provence', name: 'Provence',         img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', rating: 4.7, duration: '3 Days', desc: 'Lavender fields, sunflowers and medieval villages in the French countryside.' },
    ]
  },
  thailand: {
    name: 'Thailand', country: '🇹🇭',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1800&q=80',
    desc: 'The Land of Smiles — golden temples, turquoise seas and unforgettable street food.',
    currency: '฿ Thai Baht', language: 'Thai', bestTime: 'November–April', food: 'Pad Thai, Tom Yum, Green Curry, Mango Sticky Rice',
    visa: 'Visa-on-arrival or e-Visa', timezone: 'ICT (UTC+7)',
    tips: [
      { icon: '👗', text: 'Wear modest clothes when visiting temples — no shorts or sleeveless tops.' },
      { icon: '🤝', text: 'The Thai greeting "Wai" — press palms together and bow slightly.' },
      { icon: '🌡️', text: 'Stay hydrated — the heat and humidity are intense, especially inland.' },
      { icon: '🛺', text: 'Use Grab app for reliable, fair-priced rides in cities.' },
    ],
    places: [
      { id: 'bangpalace', name: 'Grand Palace Bangkok',  img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80', rating: 4.9, duration: '3–4 hrs', desc: 'A dazzling complex of sacred temples and royal halls at the heart of Bangkok.' },
      { id: 'phiphi',    name: 'Phi Phi Islands',      img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80', rating: 4.9, duration: '2–3 Days', desc: 'Emerald waters, dramatic limestone cliffs and paradise beaches.' },
      { id: 'chiangmai', name: 'Chiang Mai Temples',   img: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80', rating: 4.7, duration: '2 Days', desc: 'Over 300 ancient temples in the serene cultural capital of northern Thailand.' },
      { id: 'james',     name: 'James Bond Island',    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', rating: 4.8, duration: 'Half Day', desc: 'Iconic karst limestone formation rising from Phang Nga Bay\'s emerald waters.' },
    ]
  },
  italy: {
    name: 'Italy', country: '🇮🇹',
    img: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1800&q=80',
    desc: 'A living museum — ancient ruins, Renaissance art and the world\'s finest cuisine.',
    currency: '€ Euro', language: 'Italian', bestTime: 'April–June, September–October', food: 'Pizza Napoletana, Pasta Carbonara, Gelato, Tiramisu',
    visa: 'Schengen visa required for some', timezone: 'CET (UTC+1)',
    tips: [
      { icon: '🍕', text: 'Avoid restaurants right next to major landmarks — walk two streets away for better food and prices.' },
      { icon: '🎫', text: 'Pre-book Colosseum and Vatican tickets — queues can be hours long.' },
      { icon: '👛', text: 'Watch your belongings in Rome\'s crowded tourist spots.' },
      { icon: '☕', text: 'Italians drink espresso standing at the bar — it\'s cheaper and authentic.' },
    ],
    places: [
      { id: 'colosseum', name: 'Colosseum Rome',   img: 'https://images.unsplash.com/photo-1588598374012-3b09c95e9a61?w=600&q=80', rating: 4.9, duration: '3–4 hrs', desc: 'The greatest amphitheater ever built — 2,000 years of history in every stone.' },
      { id: 'venice',    name: 'Venice Canals',    img: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=600&q=80', rating: 4.9, duration: '2 Days', desc: 'Float through the world\'s most romantic city on a gondola at golden hour.' },
      { id: 'amalfi',   name: 'Amalfi Coast',     img: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=80', rating: 5.0, duration: '3 Days', desc: 'Dramatic cliffside villages cascading into the sapphire Mediterranean sea.' },
      { id: 'florence',  name: 'Florence & Uffizi', img: 'https://images.unsplash.com/photo-1516477266423-f0cabe7c2de8?w=600&q=80', rating: 4.8, duration: '2 Days', desc: 'The cradle of the Renaissance — Michelangelo\'s David and Botticelli\'s Primavera.' },
    ]
  },
  maldives: {
    name: 'Maldives', country: '🇲🇻',
    img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1800&q=80',
    desc: 'Paradise defined — crystal-clear lagoons, infinite blue skies and overwater luxury.',
    currency: 'MVR Maldivian Rufiyaa (USD widely accepted)', language: 'Dhivehi, English', bestTime: 'November–April', food: 'Mas Huni, Garudhiya fish curry, Hedhikaa snacks',
    visa: 'Free on arrival (30 days)', timezone: 'MVT (UTC+5)',
    tips: [
      { icon: '🌊', text: 'Bring reef-safe sunscreen to protect the fragile coral ecosystems.' },
      { icon: '📅', text: 'Book resorts 6–12 months in advance for peak season (Dec–Feb).' },
      { icon: '🛥️', text: 'Seaplane transfers are scenic but expensive — budget accordingly.' },
      { icon: '🏝️', text: 'Visit local islands for authentic culture at a fraction of resort prices.' },
    ],
    places: [
      { id: 'male',     name: 'Malé City',          img: 'https://images.unsplash.com/photo-1512551980832-13df02babc9e?w=600&q=80', rating: 4.5, duration: 'Half Day', desc: 'The world\'s most densely populated capital — vibrant, compact and surprisingly charming.' },
      { id: 'baa',      name: 'Baa Atoll Biosphere', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', rating: 5.0, duration: '2–3 Days', desc: 'UNESCO biosphere reserve — snorkel with manta rays and whale sharks.' },
      { id: 'overwater',name: 'Overwater Bungalows', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', rating: 5.0, duration: '3+ Days', desc: 'Wake up above turquoise waters with a glass floor revealing the reef below.' },
    ]
  },
  australia: {
    name: 'Australia', country: '🇦🇺',
    img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1800&q=80',
    desc: 'Vast, wild and wildly diverse — from ancient outback to the world\'s largest coral reef.',
    currency: 'A$ Australian Dollar', language: 'English', bestTime: 'September–November, March–May', food: 'Meat Pies, Vegemite, Barramundi, Tim Tams',
    visa: 'ETA or eVisitor required for most', timezone: 'AEST (UTC+10)',
    tips: [
      { icon: '🌞', text: 'Australian sun is brutal — apply SPF 50+ sunscreen religiously.' },
      { icon: '🐊', text: 'Always follow local warnings near beaches and in the outback.' },
      { icon: '🚗', text: 'Renting a campervan is the classic way to explore the coastline.' },
      { icon: '🐠', text: 'Book Great Barrier Reef tours directly with accredited operators.' },
    ],
    places: [
      { id: 'sydney',   name: 'Sydney Opera House', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', rating: 4.9, duration: '3–4 hrs', desc: 'Australia\'s most recognizable icon — a sculptural masterpiece on the harbor.' },
      { id: 'reef',     name: 'Great Barrier Reef', img: 'https://images.unsplash.com/photo-1546500840-ae38253aba9b?w=600&q=80', rating: 5.0, duration: '2–3 Days', desc: 'The world\'s largest coral reef system — a kaleidoscope of marine life.' },
      { id: 'uluru',    name: 'Uluru',              img: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=600&q=80', rating: 4.9, duration: '2 Days', desc: 'Sacred red monolith at the heart of Australia — most beautiful at sunrise.' },
      { id: 'melbcafe', name: 'Melbourne Laneways',  img: 'https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=600&q=80', rating: 4.7, duration: 'Full Day', desc: 'World-class coffee, street art and a foodie scene that rivals any global city.' },
    ]
  },
};

// ─── COUNTRY PAGE ────────────────────────────────────
function initCountryPage() {

  let page = document.getElementById("country-page");

  if(page == null){
    return;
  }

  let id = sessionStorage.getItem("currentCountry");

  if(id == null){
    id = "japan";
  }

  let data = COUNTRY_DATA[id];

  if(data == null){
    data = COUNTRY_DATA["japan"];
  }

  sessionStorage.setItem("currentCountry", id);


  // hero image
  let heroImg = document.getElementById("country-hero-img");
  heroImg.src = data.img;


  // country title
  let title = document.getElementById("country-title");
  title.textContent = data.country + " " + data.name;


  // description
  let desc = document.getElementById("country-hero-desc");
  desc.textContent = data.desc;


  // best time
  let bestTime = document.getElementById("country-best-time");
  bestTime.innerHTML = "🗓️ Best Time: <strong>" + data.bestTime + "</strong>";


  // currency
  let currency = document.getElementById("country-currency");
  currency.innerHTML = "💰 " + data.currency;


  // language
  let language = document.getElementById("country-lang");
  language.innerHTML = "🗣️ " + data.language;

  // Info cards
  document.getElementById('info-currency').textContent = data.currency;
  document.getElementById('info-language').textContent = data.language;
  document.getElementById('info-besttime').textContent = data.bestTime;
  document.getElementById('info-food').textContent = data.food;
  document.getElementById('info-visa').textContent = data.visa;
  document.getElementById('info-timezone').textContent = data.timezone;

  // Tips
  // tips
let tipsEl = document.getElementById("country-tips");

let tipsHtml = "";

for(let i = 0; i < data.tips.length; i++){

  tipsHtml +=
  '<div class="tip-item">' +

    '<div class="tip-icon">' +
      data.tips[i].icon +
    '</div>' +

    '<div class="tip-text">' +
      data.tips[i].text +
    '</div>' +

  '</div>';
}

tipsEl.innerHTML = tipsHtml;



// places
let placesEl = document.getElementById("places-grid");

let placesHtml = "";

for(let i = 0; i < data.places.length; i++){

  let place = data.places[i];

  placesHtml +=

  '<div class="place-card" id="place-' + place.id + '" onclick="togglePlace(\'' + place.id + '\')">' +

    '<div class="place-img-wrap">' +

      '<img class="place-img" src="' + place.img + '" alt="' + place.name + '">' +

      '<div class="place-select-cb" id="cb-' + place.id + '">' +
        '✓' +
      '</div>' +

    '</div>' +


    '<div class="place-body">' +

      '<div class="place-name">' +
        place.name +
      '</div>' +

      '<div class="place-meta">' +

        '<span>⭐ ' +
          place.rating +
        '</span>' +

        '<span>⏱️ ' +
          place.duration +
        '</span>' +

      '</div>' +

      '<div class="place-desc">' +
        place.desc +
      '</div>' +

    '</div>' +


    '<div class="place-actions">' +

      '<button class="select-place-btn" id="btn-' + place.id + '">' +
        '+ Add to Trip' +
      '</button>' +

    '</div>' +

  '</div>';
}

placesEl.innerHTML = placesHtml;



// breadcrumb
let breadcrumb = document.getElementById("country-breadcrumb");

breadcrumb.textContent = data.name;


// animation
initRevealPage();

}

let selectedPlaces = [];
window.togglePlace = function(id) {

  let card = document.getElementById("place-" + id);

  let btn = document.getElementById("btn-" + id);

  let idx = selectedPlaces.indexOf(id);


  // if place not selected
  if(idx == -1){

    selectedPlaces.push(id);

    card.classList.add("selected");

    btn.textContent = "✓ Added";

  }

  // if already selected
  else{

    selectedPlaces.splice(idx, 1);

    card.classList.remove("selected");

    btn.textContent = "+ Add to Trip";

  }


  // update bottom bar
  updateSelectionBar();

};




window.proceedToTrip = function() {

  // get selected country
  let countryId = sessionStorage.getItem("currentCountry");

  // default country
  if(countryId == null){
    countryId = "japan";
  }

  // save selected places
  sessionStorage.setItem(
    "selectedPlaces",
    JSON.stringify(selectedPlaces)
  );

  // open next page
  window.location.href = "trip.html";

};

function initTripPage() {

  // check page
  let tripPage = document.getElementById("trip-page");

  if(tripPage == null){
    return;
  }

  // get selected country
  let countryId = sessionStorage.getItem("currentCountry");

  // default country
  if(countryId == null){
    countryId = "japan";
  }

  // get country data
  let countryData = COUNTRY_DATA[countryId];

  // set country name
  if(countryData){

    let countryName = document.getElementById("trip-country-name");

    countryName.textContent =
      "📍 Planning your trip to " + countryData.name;

  }

  // get all option cards
  let cards = document.querySelectorAll(".option-card");

  // loop through cards
  for(let i = 0; i < cards.length; i++){

    cards[i].addEventListener("click", function(){

      // get parent group
      let group = cards[i].closest(".option-cards");

      // get all cards inside group
      let allCards = group.querySelectorAll(".option-card");

      // remove active class
      for(let j = 0; j < allCards.length; j++){
        allCards[j].classList.remove("active");
      }

      // add active class
      cards[i].classList.add("active");

    });

  }

  // date input
  let dateInput = document.getElementById("start-date");

  // set minimum date
  if(dateInput){

    let today = new Date();

    let formattedDate =
      today.toISOString().split("T")[0];

    dateInput.min = formattedDate;

  }

}

window.generateTrip = function() {

  let days = document.getElementById("num-days").value;
  let travelers = document.getElementById("num-travelers").value;
  let startDate = document.getElementById("start-date").value;

  let budgetCard = document.querySelector(".option-cards.cols-3 .option-card.active");
  let budget = "medium";

  if(budgetCard){
    budget = budgetCard.dataset.val;
  }

  let typeCard = document.querySelector(".option-cards.cols-4 .option-card.active");
  let travelType = "solo";

  if(typeCard){
    travelType = typeCard.dataset.val;
  }

  let hotel = document.getElementById("hotel-pref").value;
  let transport = document.getElementById("transport-type").value;

  // validation
  if(days == "" || days < 1){
    showToast("Please enter number of days!");
    return;
  }

  if(startDate == ""){
    showToast("Please select a start date!");
    return;
  }

  // save trip data
  let tripData = {
    days: days,
    travelers: travelers,
    startDate: startDate,
    budget: budget,
    travelType: travelType,
    hotel: hotel,
    transport: transport
  };

  sessionStorage.setItem(
    "tripDetails",
    JSON.stringify(tripData)
  );

  // button loading
  let btn = document.querySelector(".generate-btn");

  if(btn){

    btn.innerHTML =
      '<span class="btn-icon">⏳</span> Generating your plan...';

    btn.disabled = true;

    setTimeout(function(){
      window.location.href = "itinerary.html";
    }, 1800);

  }

};
function initItineraryPage() {

  // check page
  let page = document.getElementById("itinerary-page");

  if(page == null){
    return;
  }

  // get country
  let countryId = sessionStorage.getItem("currentCountry");

  if(countryId == null){
    countryId = "japan";
  }

  let country = COUNTRY_DATA[countryId];

  if(country == null){
    country = COUNTRY_DATA["japan"];
  }

  // get trip details
  let trips = sessionStorage.getItem("tripDetails");

  if(trips == null){
    trips = {};
  }
  else{
    trips = JSON.parse(trips);
  }

  // get selected places
  let selPlaces = sessionStorage.getItem("selectedPlaces");

  if(selPlaces == null){
    selPlaces = [];
  }
  else{
    selPlaces = JSON.parse(selPlaces);
  }

  // values
  let days = parseInt(trips.days);

  if(!days){
    days = 3;
  }

  let budget = trips.budget;

  if(!budget){
    budget = "medium";
  }

  let travelType = trips.travelType;

  if(!travelType){
    travelType = "solo";
  }

  let travelers = parseInt(trips.travelers);

  if(!travelers){
    travelers = 1;
  }

  let startDate;

  if(trips.startDate){
    startDate = new Date(trips.startDate);
  }
  else{
    startDate = new Date();
  }

  // budget rates
  let budgetMap = {

    low: [30, 80, 20],
    medium: [80, 200, 50],
    luxury: [300, 700, 150]

  };

  let rates = budgetMap[budget];

  if(!rates){
    rates = budgetMap["medium"];
  }

  let hotelRate = rates[0];
  let flightRate = rates[1];
  let foodRate = rates[2];

  // total budget
  let totalBudget =
    Math.round(
      (hotelRate * days + flightRate * 2 + foodRate * days)
      * travelers
    );

  // set details
  document.getElementById("itin-country").textContent =
    country.country + " " + country.name;

  document.getElementById("itin-days").textContent =
    days + " Days";

  // travelers text
  let travelerText = travelers + " Person";

  if(travelers > 1){
    travelerText += "s";
  }

  document.getElementById("itin-travelers").textContent =
    travelerText;

  document.getElementById("itin-budget").textContent =
    "$" + totalBudget.toLocaleString();

  let firstLetter = travelType.charAt(0).toUpperCase();

  let remaining = travelType.slice(1);

  document.getElementById("itin-type").textContent =
    firstLetter + remaining;

  // places
  let allPlaces = country.places;

  let selectedP;

  if(selPlaces.length > 0){

    selectedP = allPlaces.filter(function(place){

      return selPlaces.includes(place.id);

    });

  }
  else{

    selectedP = allPlaces;

  }

  let timeline = document.getElementById("timeline");

  // activity lists
  let MEALS = [
    "🍜 Local Breakfast at Hotel",
    "🥘 Lunch at Famous Restaurant",
    "🍽️ Traditional Dinner"
  ];

  let EVENINGS = [
    "🌙 Evening City Walk",
    "🛍️ Shopping at Local Market",
    "🎭 Cultural Show / Night Tour"
  ];

  let ACTIVITIES = [
    "🚶 Orientation Walk of City Center",
    "🚕 Local Transport Experience",
    "📸 Photo Session at Golden Hour"
  ];

  // copy places
  let placesQueue = [];

  for(let i = 0; i < selectedP.length; i++){
    placesQueue.push(selectedP[i]);
  }

  let html = "";

  // days loop
  for(let d = 1; d <= days; d++){

    let date = new Date(startDate);

    date.setDate(date.getDate() + d - 1);

    let dateStr =
      date.toLocaleDateString(
        "en-US",
        {
          weekday: "short",
          month: "short",
          day: "numeric"
        }
      );

    let dayActivities = [];

    // morning place
    if(placesQueue.length > 0){

      let p = placesQueue.shift();

      dayActivities.push({
        icon: "🌅",
        name: p.name,
        time: "9:00 AM",
        dur: p.duration,
        type: "place"
      });

    }
    else{

      dayActivities.push({
        icon: "🏙️",
        name: ACTIVITIES[d % ACTIVITIES.length],
        time: "9:00 AM",
        dur: "2 hrs",
        type: "place"
      });

    }

    // lunch
    dayActivities.push({
      icon: "🍽️",
      name: MEALS[1],
      time: "1:00 PM",
      dur: "1.5 hrs",
      type: "meal"
    });

    // afternoon
    if(placesQueue.length > 0){

      let p = placesQueue.shift();

      dayActivities.push({
        icon: "🗺️",
        name: p.name,
        time: "2:30 PM",
        dur: p.duration,
        type: "place"
      });

    }
    else{

      dayActivities.push({
        icon: "🎒",
        name: ACTIVITIES[(d + 1) % ACTIVITIES.length],
        time: "2:30 PM",
        dur: "2 hrs",
        type: "place"
      });

    }

    // evening
    dayActivities.push({
      icon: "🌆",
      name: EVENINGS[d % EVENINGS.length],
      time: "6:00 PM",
      dur: "2 hrs",
      type: "place"
    });

    // dinner
    dayActivities.push({
      icon: "🍜",
      name: MEALS[2],
      time: "8:00 PM",
      dur: "1.5 hrs",
      type: "meal"
    });


    html += `
    <div class="day-block reveal">
      <div class="day-dot">${d}</div>
      <div class="day-label">Day ${d} <span class="day-date">— ${dateStr}</span></div>
      <div class="activity-list">
        ${dayActivities.map(a => `
          <div class="activity-item ${a.type}">
            <div class="activity-icon">${a.icon}</div>
            <div class="activity-info">
              <div class="activity-name">${a.name}</div>
              <div class="activity-time">${a.time}</div>
            </div>
            <div class="activity-dur">${a.dur}</div>
          </div>
        `).join('')}
      </div>
    </div>`;
  }
  timeline.innerHTML = html;
 let hotels = [

  {
    name: "Grand Heritage Hotel",
    price: "$" + hotelRate + "/night",
    rating: "4.8 ⭐",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&q=80"
  },

  {
    name: "City View Boutique",
    price: "$" + Math.round(hotelRate * 0.65) + "/night",
    rating: "4.6 ⭐",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=200&q=80"
  },

  {
    name: "Budget Backpacker Inn",
    price: "$" + Math.round(hotelRate * 0.3) + "/night",
    rating: "4.2 ⭐",
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=200&q=80"
  }

];



let hotelsList = document.getElementById("hotels-list");

let hotelsHtml = "";

for(let i = 0; i < hotels.length; i++){

  let h = hotels[i];

  hotelsHtml +=

  '<div class="hotel-item">' +

    '<img class="hotel-thumb" src="' + h.img + '" alt="' + h.name + '">' +

    '<div class="hotel-info">' +

      '<div class="hotel-name">' +
        h.name +
      '</div>' +

      '<div class="hotel-price">' +
        h.price +
      '</div>' +

      '<div class="hotel-rating">' +
        h.rating +
      '</div>' +

    '</div>' +

  '</div>';

}

hotelsList.innerHTML = hotelsHtml;
 let hotelTotal = hotelRate * days * travelers;

let flightTotal = flightRate * 2 * travelers;

let foodTotal = foodRate * days * travelers;

let actTotal = Math.round(totalBudget * 0.1);


// budget items
let bdItems = [

  {
    label: "Accommodation",
    val: hotelTotal,
    pct: Math.round(hotelTotal / totalBudget * 100)
  },

  {
    label: "Flights",
    val: flightTotal,
    pct: Math.round(flightTotal / totalBudget * 100)
  },

  {
    label: "Food & Dining",
    val: foodTotal,
    pct: Math.round(foodTotal / totalBudget * 100)
  },

  {
    label: "Activities",
    val: actTotal,
    pct: Math.round(actTotal / totalBudget * 100)
  }

];


// budget html
let budgetHtml = "";

for(let i = 0; i < bdItems.length; i++){

  let b = bdItems[i];

  budgetHtml +=

  '<div class="budget-bar">' +

    '<div class="budget-label">' +

      '<span>' +
        b.label +
      '</span>' +

      '<span>$' +
        b.val.toLocaleString() +
      '</span>' +

    '</div>' +

    '<div class="budget-track">' +

      '<div class="budget-fill" style="width:' +
        b.pct +
        '%">' +

      '</div>' +

    '</div>' +

  '</div>';

}


// total budget
budgetHtml +=

'<div class="budget-total">' +

  '<span class="budget-total-label">' +
    'Total Estimated' +
  '</span>' +

  '<span class="budget-total-val">' +
    '$' + totalBudget.toLocaleString() +
  '</span>' +

'</div>';


// set html
document.getElementById("budget-breakdown").innerHTML =
  budgetHtml;


// animation
initRevealPage();

}



// download pdf
window.downloadPDF = function() {

  showToast("📄 PDF download would trigger here in production!");

};


// save trip
window.saveTrip = function() {

  showToast("✅ Trip saved successfully!");

};
function initAboutPage() {

  let aboutPage = document.getElementById("about-page");

  if(aboutPage == null){
    return;
  }

  let counters = document.querySelectorAll(".stat-card .num");

  let obs = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

      if(!entry.isIntersecting){
        return;
      }

      let el = entry.target;

      let end = parseInt(el.dataset.target);

      let cur = 0;

      let step = Math.max(1, Math.floor(end / 60));

      let timer = setInterval(function(){

        cur = cur + step;

        if(cur >= end){

          cur = end;

          clearInterval(timer);

        }

        let suffix = el.dataset.suffix;

        if(!suffix){
          suffix = "";
        }

        el.textContent = cur + suffix;

      }, 30);

      obs.unobserve(el);

    });

  }, {
    threshold: 0.5
  });

  counters.forEach(function(c){

    obs.observe(c);

  });

}
function initRevealPage() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => obs.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));
    const toggle = navbar.querySelector('.nav-toggle');
    const links  = navbar.querySelector('.nav-links');
    if (toggle && links) {
      toggle.addEventListener('click', () => links.classList.toggle('open'));
      links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
    }
  }

  const btn   = document.getElementById('dark-toggle');
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  if (btn) {
    btn.textContent = saved === 'dark' ? '☀️' : '🌙';
    btn.addEventListener('click', () => {
      const cur  = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      btn.textContent = next === 'dark' ? '☀️' : '🌙';
    });
  }

  initRevealPage();
  initCountryPage();
  initTripPage();
  initItineraryPage();
  initAboutPage();
});

window.showToast = function(msg) {
  let toast = document.getElementById('toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'toast'; toast.className = 'toast'; document.body.appendChild(toast); }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
};

window.goHome    = () => { window.location.href = 'index.html'; };
window.goTrip    = () => { window.location.href = 'trip.html'; };
window.goItinerary = () => { window.location.href = 'itinerary.html'; };
window.goAbout   = () => { window.location.href = 'about.html'; };
window.goBack    = () => history.back();