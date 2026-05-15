/* ===================================================
   WANDR — Main JavaScript (index.html only)
   Handles: data, navigation, dark mode, categories,
            search, scroll reveal, loading screen.
   =================================================== */

/* ─── DATA ───────────────────────────────────────────
   These are plain objects / arrays that hold all the
   info for categories and countries.                  */

const CATEGORIES = [
  { id: 'beaches',    name: 'Beaches',    icon: '🏖️',  img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80' },
  { id: 'mountains',  name: 'Mountains',  icon: '🏔️',  img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80' },
  { id: 'adventure',  name: 'Adventure',  icon: '🧗',  img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80' },
  { id: 'historical', name: 'Historical', icon: '🏛️',  img: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=600&q=80' },
  { id: 'snow',       name: 'Snow',       icon: '❄️',  img: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=600&q=80' },
  { id: 'wildlife',   name: 'Wildlife',   icon: '🦁',  img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80' },
  { id: 'honeymoon',  name: 'Honeymoon',  icon: '💑',  img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80' },
  { id: 'city',       name: 'City Life',  icon: '🌆',  img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80' },
];

const COUNTRIES = [
  {
    id: 'japan', name: 'Japan', desc: 'Land of the Rising Sun — temples, tech & cherry blossoms.',
    img: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&q=80',
    rating: 4.9, reviews: '2.4k', categories: ['historical','city','adventure'],
    currency: '¥ Yen', language: 'Japanese', bestTime: 'Mar–May, Sep–Nov', food: 'Sushi, Ramen, Tempura',
    tips: ['Take off shoes before entering homes', 'Try 7-Eleven food — it\'s amazing', 'Get a Suica card for trains']
  },
  {
    id: 'india', name: 'India', desc: 'A mosaic of cultures, ancient temples & vibrant colors.',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80',
    rating: 4.7, reviews: '3.1k', categories: ['historical','wildlife','adventure'],
    currency: '₹ Rupee', language: 'Hindi, English', bestTime: 'Oct–Mar', food: 'Biryani, Curry, Dosa',
    tips: ['Carry cash in smaller cities', 'Bargain at local markets', 'Try street food carefully']
  },
  {
    id: 'switzerland', name: 'Switzerland', desc: 'Alpine paradise with pristine lakes and luxury.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    rating: 4.9, reviews: '1.8k', categories: ['mountains','snow','honeymoon'],
    currency: 'CHF Franc', language: 'German, French', bestTime: 'Jun–Sep, Dec–Feb', food: 'Fondue, Raclette, Rösti',
    tips: ['Buy Swiss Pass for unlimited travel', 'Book mountain excursions early', 'Try local chocolate shops']
  },
  {
    id: 'france', name: 'France', desc: 'Romance, fine cuisine & world-class art and culture.',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80',
    rating: 4.8, reviews: '2.9k', categories: ['historical','city','honeymoon'],
    currency: '€ Euro', language: 'French', bestTime: 'Apr–Jun, Sep–Oct', food: 'Croissants, Coq au Vin, Crêpes',
    tips: ['Learn basic French phrases', 'Book Eiffel Tower in advance', 'Visit museums on free days']
  },
  {
    id: 'thailand', name: 'Thailand', desc: 'Tropical beaches, rich history and exotic cuisine.',
    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    rating: 4.7, reviews: '2.2k', categories: ['beaches','historical','adventure'],
    currency: '฿ Baht', language: 'Thai', bestTime: 'Nov–Apr', food: 'Pad Thai, Tom Yum, Mango Sticky Rice',
    tips: ['Dress modestly at temples', 'Negotiate taxi prices', 'Try night markets for food']
  },
  {
    id: 'italy', name: 'Italy', desc: 'Ancient history, art masterpieces & incredible food.',
    img: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80',
    rating: 4.8, reviews: '3.4k', categories: ['historical','city','honeymoon'],
    currency: '€ Euro', language: 'Italian', bestTime: 'Apr–Jun, Sep–Oct', food: 'Pizza, Pasta, Gelato',
    tips: ['Avoid tourist trap restaurants', 'Validate train tickets before boarding', 'Watch out for pickpockets']
  },
  {
    id: 'maldives', name: 'Maldives', desc: 'Crystal waters, overwater bungalows & coral reefs.',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
    rating: 5.0, reviews: '1.2k', categories: ['beaches','honeymoon'],
    currency: 'MVR Rufiyaa', language: 'Dhivehi, English', bestTime: 'Nov–Apr', food: 'Mas Huni, Garudhiya, Hedhikaa',
    tips: ['Book resorts well in advance', 'Respect local culture on local islands', 'Bring reef-safe sunscreen']
  },
  {
    id: 'australia', name: 'Australia', desc: 'Vast landscapes, unique wildlife & vibrant cities.',
    img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80',
    rating: 4.8, reviews: '2.1k', categories: ['wildlife','beaches','adventure'],
    currency: 'A$ Dollar', language: 'English', bestTime: 'Sep–Nov, Mar–May', food: 'Vegemite, BBQ, Tim Tams',
    tips: ['Apply sunscreen religiously', 'Rent a campervan for road trips', 'Respect fire ban signs']
  },
];

/* Which countries belong to each category */
const CATEGORY_MAP = {
  beaches:    ['maldives','thailand','australia'],
  mountains:  ['switzerland','japan','india'],
  adventure:  ['australia','india','japan','thailand'],
  historical: ['japan','india','france','italy','thailand'],
  snow:       ['switzerland','japan'],
  wildlife:   ['australia','india'],
  honeymoon:  ['maldives','france','italy','switzerland'],
  city:       ['japan','france','italy','india'],
};


/* ─── HELPER: Build a country card HTML string ───────
   This template function returns the HTML for one card.
   We call it with a country object and it fills it in. */
function makeCard(country) {

  let stars = "";

  let totalStars = Math.round(country.rating);

  for(let i = 0; i < totalStars; i++){
    stars += "★";
  }

  let card =

  '<div class="country-card reveal" onclick="goCountry(\'' + country.id + '\')">' +

    '<div class="country-img-wrap">' +

      '<img class="country-img" src="' + country.img + '" alt="' + country.name + '">' +

      '<div class="country-badge">' +
        '⭐ ' + country.rating +
        ' <span>(' + country.reviews + ')</span>' +
      '</div>' +

    '</div>' +

    '<div class="country-body">' +

      '<div class="country-name">' +
        country.name +
      '</div>' +

      '<div class="country-desc">' +
        country.desc +
      '</div>' +

      '<div class="country-footer">' +

        '<div class="rating">' +

          '<span class="stars">' +
            stars +
          '</span>' +

          '<span>' +
            country.rating +
          '</span>' +

        '</div>' +

        '<button class="explore-btn" onclick="event.stopPropagation(); goCountry(\'' + country.id + '\')">' +
          'Explore →' +
        '</button>' +

      '</div>' +

    '</div>' +

  '</div>';

  return card;

}


/* ─── NAVBAR: Scroll + Mobile Toggle ─────────────────
   When user scrolls past 60px, the navbar gets a
   solid dark background ("scrolled" class).          */
function initNav() {

  let navbar = document.getElementById("navbar");

  if(navbar == null){
    return;
  }

  // navbar scroll
  window.addEventListener("scroll", function(){

    if(window.scrollY > 60){

      navbar.classList.add("scrolled");

    }
    else{

      navbar.classList.remove("scrolled");

    }

  });


  // menu button
  let toggle = navbar.querySelector(".nav-toggle");

  let links = navbar.querySelector(".nav-links");


  // mobile menu
  if(toggle && links){

    toggle.addEventListener("click", function(){

      links.classList.toggle("open");

    });


    // close menu after clicking link
    let allLinks = links.querySelectorAll("a");


    for(let i = 0; i < allLinks.length; i++){

      allLinks[i].addEventListener("click", function(){

        links.classList.remove("open");

      });

    }

  }

}


/* ─── DARK MODE ──────────────────────────────────────
   We save the user's theme preference in localStorage
   so it persists across page loads.                  */
function initDarkMode() {

  let btn = document.getElementById("dark-toggle");

  let saved = localStorage.getItem("theme");


  // default theme
  if(saved == null){

    saved = "dark";

  }


  // apply theme
  document.documentElement.setAttribute(
    "data-theme",
    saved
  );


  // change icon
  updateDarkIcon(btn, saved);


  // button click
  if(btn){

    btn.addEventListener("click", function(){

      let current =
        document.documentElement.getAttribute("data-theme");

      let next;


      // switch theme
      if(current == "dark"){

        next = "light";

      }
      else{

        next = "dark";

      }


      // apply new theme
      document.documentElement.setAttribute(
        "data-theme",
        next
      );


      // save theme
      localStorage.setItem("theme", next);


      // update icon
      updateDarkIcon(btn, next);

    });

  }

}

/* Shows sun when dark, moon when light */
function updateDarkIcon(btn, theme) {

  if(btn){

    if(theme == "dark"){

      btn.textContent = "☀️";

    }
    else{

      btn.textContent = "🌙";

    }

  }

}

/* ─── LOADING SCREEN ─────────────────────────────────
   Hides the loading screen after 1.8 seconds.        */
function initLoader() {
  let screen = document.getElementById("loading-screen");
  if(screen == null){
    return;
  }
  setTimeout(function(){
    screen.classList.add("hidden");
  }, 1800);

}


/* ─── SCROLL REVEAL ──────────────────────────────────
   IntersectionObserver watches elements on the page.
   When an element enters the viewport (becomes visible),
   we add the 'visible' class which triggers the CSS
   fade-in + slide-up animation.                       */
function initReveal() {

  let observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });
  // reveal elements
  let elements = document.querySelectorAll(".reveal");
  for(let i = 0; i < elements.length; i++){
    observer.observe(elements[i]);
  }
}
/* Call this after dynamically adding new .reveal elements to the page */
function observeNew() {
  let observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  // get hidden reveal elements
  let elements =
    document.querySelectorAll(".reveal:not(.visible)");
  // observe elements
  for(let i = 0; i < elements.length; i++){
    observer.observe(elements[i]);
  }
}


/* ─── CATEGORIES ─────────────────────────────────────
   Builds the category cards grid on the home page.   */
function initCategories() {
  let grid = document.getElementById("categories-grid");
  if(grid == null){
    return;
  }
  let html = "";
  // category loop
  for(let i = 0; i < CATEGORIES.length; i++){
    let cat = CATEGORIES[i];
    html +=
    '<div class="category-card reveal" onclick="filterCategory(\'' + cat.id + '\', \'' + cat.name + '\')">' +
      '<img class="cat-img" src="' + cat.img + '" alt="' + cat.name + '">' +
      '<div class="cat-overlay">' +
        '<div class="cat-icon">' +
          cat.icon +
        '</div>' +
        '<div class="cat-name">' +
          cat.name +
        '</div>' +
      '</div>' +
    '</div>';
  }
  // add html
  grid.innerHTML = html;
  // reveal animation
  observeNew();
}

/* ─── FILTER by category ─────────────────────────────
   Called when user clicks a category card.
   Shows matching countries in the filter-result panel. */
window.filterCategory = function(categoryId, categoryName) {
  let section = document.getElementById("filter-result");
  let title = document.getElementById("filter-title");
  let grid = document.getElementById("filter-countries-grid");
  if(section == null || grid == null){
    return;
  }
  // get country ids
  let ids = CATEGORY_MAP[categoryId];
  if(ids == null){
    ids = [];
  }
  // filter countries
  let filtered = [];
  for(let i = 0; i < COUNTRIES.length; i++){
    let country = COUNTRIES[i];
    if(ids.includes(country.id)){
      filtered.push(country);
    }
  }
  // set title
  title.textContent =
    categoryName + " Destinations (" + filtered.length + ")";
  // show countries
  if(filtered.length > 0){
    let html = "";
    for(let i = 0; i < filtered.length; i++){
      html += makeCard(filtered[i]);
    }
    grid.innerHTML = html;
  }
  else{
    grid.innerHTML =
      '<p style="color:var(--text-light);grid-column:1/-1">' +
      'No destinations found.' +
      '</p>';
  }
  // show section
  section.classList.add("active");
  // scroll
  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
  // reveal animation
  observeNew();
};

/* Hides the filter result panel */
window.closeFilter = function() {
  let section = document.getElementById("filter-result");
  if(section){
    section.classList.remove("active");
  }
};

/* ─── NAVIGATION HELPERS ─────────────────────────────
   These functions navigate to different pages.
   We store the selected country ID in sessionStorage
   so the country page knows which country to show.   */
window.goCountry = function(id) {

  sessionStorage.setItem("currentCountry", id);

  window.location.href = "country.html";

};


window.goHome = function(){

  window.location.href = "index.html";

};


window.goTrip = function(){

  window.location.href = "trip.html";

};


window.goItinerary = function(){

  window.location.href = "itinerary.html";

};


window.goAbout = function(){

  window.location.href = "about.html";

};

/* ─── TOAST NOTIFICATION ─────────────────────────────
   Shows a small popup message at the bottom-right
   of the screen for 3 seconds, then hides it.        */
window.showToast = function(message) {

  let toast = document.getElementById("toast");


  // create toast
  if(!toast){

    toast = document.createElement("div");

    toast.id = "toast";

    toast.className = "toast";

    document.body.appendChild(toast);

  }


  // set message
  toast.textContent = message;


  // show toast
  toast.classList.add("show");


  // hide toast
  setTimeout(function(){

    toast.classList.remove("show");

  }, 3200);

};

/* ─── SEARCH ─────────────────────────────────────────
   Handles live suggestions and the search button.    */

/* Wraps a matching word in a highlighted <mark> tag */
function highlight(text, query) {

  // if no query
  if(!query){

    return text;

  }


  // escape special characters
  let escaped = query.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );


  // create regex
  let regex = new RegExp(
    "(" + escaped + ")",
    "gi"
  );


  // highlight text
  let result = text.replace(
    regex,
    "<mark>$1</mark>"
  );


  return result;

}

/* Returns countries (and categories) that match the search */
function getSearchResults(query, categoryId) {

  query = query.trim().toLowerCase();

  let pool = COUNTRIES;


  // filter by category
  if(categoryId){

    let ids = CATEGORY_MAP[categoryId];

    if(ids == null){
      ids = [];
    }

    let filteredCountries = [];


    for(let i = 0; i < pool.length; i++){

      let c = pool[i];

      if(ids.includes(c.id)){

        filteredCountries.push(c);

      }

    }

    pool = filteredCountries;

  }



  // filter by search text
  if(query){

    let searchResults = [];


    for(let i = 0; i < pool.length; i++){

      let c = pool[i];

      let found = false;


      // country name
      if(c.name.toLowerCase().includes(query)){
        found = true;
      }

      // description
      else if(c.desc.toLowerCase().includes(query)){
        found = true;
      }

      // food
      else if(c.food.toLowerCase().includes(query)){
        found = true;
      }

      // language
      else if(c.language.toLowerCase().includes(query)){
        found = true;
      }

      // currency
      else if(c.currency.toLowerCase().includes(query)){
        found = true;
      }

      // categories
      else{

        for(let j = 0; j < c.categories.length; j++){

          if(c.categories[j].includes(query)){

            found = true;

            break;

          }

        }

      }


      // add result
      if(found){

        searchResults.push(c);

      }

    }

    pool = searchResults;

  }



  // matching categories
  let matchedCats = [];


  if(query){

    for(let i = 0; i < CATEGORIES.length; i++){

      let cat = CATEGORIES[i];

      if(cat.name.toLowerCase().includes(query)){

        matchedCats.push(cat);

      }

    }

  }



  // return results
  return {

    countries: pool,

    categories: matchedCats

  };

}
/* Renders the dropdown suggestion list under the search box */
function renderSuggestions(query, categoryId) {

  let box = document.getElementById("search-suggestions");

  if(box == null){
    return;
  }


  let results = getSearchResults(query, categoryId);

  let hasInput = false;


  if(query.trim().length > 0 || categoryId){
    hasInput = true;
  }


  // hide suggestions
  if(!hasInput){

    box.classList.remove("open");

    box.innerHTML = "";

    return;

  }


  let html = "";


  // no results
  if(
    results.countries.length == 0 &&
    results.categories.length == 0
  ){

    html =
      '<div class="suggestion-empty">' +
      '😕 No results for "<strong>' +
      query +
      '</strong>".<br>' +
      'Try "Japan", "beaches" or "honeymoon".' +
      '</div>';

  }

  // show results
  else{

    if(results.countries.length > 0){

      html +=
        '<div class="suggestion-group-label">' +
        'Destinations' +
        '</div>';


      for(let i = 0; i < results.countries.length; i++){

        let c = results.countries[i];

        html +=

        '<div class="suggestion-item" onclick="goCountry(\'' + c.id + '\')">' +

          '<div class="suggestion-name">' +
            highlight(c.name, query) +
          '</div>' +

        '</div>';

      }

    }

  }


  // set html
  box.innerHTML = html;


  // show box
  box.classList.add("open");

}
/* Sets up all the event listeners for the search bar */
function initSearch() {

  let searchBtn = document.getElementById("search-btn");

  let searchInp = document.getElementById("search-input");

  let searchCat = document.getElementById("search-category");

  let suggestions = document.getElementById("search-suggestions");


  if(searchBtn == null || searchInp == null){
    return;
  }


  // typing search
  searchInp.addEventListener("input", function(){

    let catValue = "";

    if(searchCat){
      catValue = searchCat.value;
    }

    renderSuggestions(
      searchInp.value,
      catValue
    );

  });



  // category change
  if(searchCat){

    searchCat.addEventListener("change", function(){

      renderSuggestions(
        searchInp.value,
        searchCat.value
      );
    });
  }
  // search button
  searchBtn.addEventListener("click", function(){
    let text =
      searchInp.value.trim().toLowerCase();
    let catVal = "";
    if(searchCat){
      catVal = searchCat.value;
    }
    // empty search
    if(text == "" && catVal == ""){
      showToast(
        "Type a destination or pick a category!"
      );
      return;
    }
    let results =
      getSearchResults(text, catVal);
    // one country
    if(results.countries.length == 1){
      suggestions.classList.remove("open");
      goCountry(results.countries[0].id);
    }
    // many countries
    else if(results.countries.length > 1){
      suggestions.classList.remove("open");
      let titleText = "";
      if(catVal){
        titleText =
          searchCat.options[searchCat.selectedIndex]
          .text.replace(/^.+?\s/, "") +
          " destinations";
      }
      else{
        titleText =
          'Results for "' +
          searchInp.value +
          '"';
      }
      let filterSection =
        document.getElementById("filter-result");
      let filterTitle =
        document.getElementById("filter-title");
      let filterGrid =
        document.getElementById("filter-countries-grid");
      if(filterSection && filterGrid){
        filterTitle.textContent =
          titleText +
          " (" +
          results.countries.length +
          ")";
        let html = "";
        for(let i = 0; i < results.countries.length; i++){
          html += makeCard(results.countries[i]);
        }
        filterGrid.innerHTML = html;
        filterSection.classList.add("active");
        filterSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        observeNew();
      }
    }
    // category result
    else if(results.categories.length > 0){
      suggestions.classList.remove("open");
      filterCategory(
        results.categories[0].id,
        results.categories[0].name
      );
    }
    // no result
    else{
      showToast(
        "No destinations found. Try Japan, beaches, honeymoon…"
      );
    }
  });
  // keyboard keys
  searchInp.addEventListener("keydown", function(e){
    // enter key
    if(e.key == "Enter"){
      searchBtn.click();
    }
    // escape key
    if(e.key == "Escape"){
      suggestions.classList.remove("open");
      searchInp.blur();
    }
  });
  // close suggestions
  document.addEventListener("click", function(e){
    if(!e.target.closest(".search-wrapper")){
      if(suggestions){
        suggestions.classList.remove("open");
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", function(){
  initLoader();
  initNav();
  initDarkMode();
  initReveal();
  initCategories();
  initSearch();
});