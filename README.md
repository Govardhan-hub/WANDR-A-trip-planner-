# 🌍 WANDR — A Trip Planner Website

##  About The Project

WANDR is a dynamic travel planning website built using HTML, CSS, and JavaScript. The project helps users explore destinations, select tourist places, and generate a personalized day-by-day travel itinerary dynamically.

The website focuses on frontend development concepts such as DOM manipulation, dynamic HTML generation, responsive UI design, session storage, filtering, animations, and user interaction.

Unlike static travel websites, WANDR dynamically creates trip plans based on the user’s:
- selected destinations
- number of days
- travelers
- budget
- travel type

---

#  Features

-  Explore travel destinations
-  Live destination search
-  Category-based destination filtering
-  Dynamic country pages
-  Personalized trip planner
-  Dynamic itinerary generation
-  Budget calculation system
-  Hotel recommendations
-  Dark / Light mode
-  Fully responsive design
-  Scroll reveal animations
-  Session storage support
-  Interactive modern UI

---

# 🛠️ Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript (Vanilla JavaScript)

## Concepts Used
- DOM Manipulation
- Event Handling
- Dynamic HTML Generation
- Arrays and Objects
- Loops and Conditions
- Session Storage
- Local Storage
- Flexbox Layout
- Responsive Web Design
- Intersection Observer API

---

#  Project Structure

## Main Files

### `index.html`
Homepage of the website.

### `country.html`
Displays country details and tourist places.

### `trip.html`
Collects user trip information such as:
- days
- travelers
- budget
- transport
- hotel preference

### `itinerary.html`
Displays the generated travel itinerary dynamically.

### `main.js`
Handles:
- homepage functionality
- search
- category filtering
- navbar
- dark mode
- reveal animations

### `pages.js`
Main project logic including:
- trip generation
- itinerary generation
- hotel recommendations
- budget calculations
- dynamic timeline generation

### `style.css`
Global styling for the website.

### `pages.css`
Styling for:
- country pages
- trip planner
- itinerary timeline
- hotel cards
- budget sections

---

#  How The Trip Planner Works

1. User selects a country
2. User selects tourist places
3. Selected places are stored using `sessionStorage`
4. User enters trip details
5. JavaScript dynamically generates:
   - itinerary timeline
   - activities
   - meals
   - hotels
   - estimated budget
6. The itinerary is displayed dynamically using DOM manipulation and `innerHTML`

---

#  Dynamic Timeline Generation

The itinerary timeline is generated dynamically using JavaScript loops.

```javascript
for(let d = 1; d <= days; d++)
```

Each iteration creates:
- Day cards
- Activities
- Meals
- Timings
- Tourist places

The final timeline is displayed using:

```javascript
timeline.innerHTML = html;
```

---

#  Challenges Faced

## 1. Dynamic Itinerary Generation
Generating a complete itinerary dynamically based on selected places and trip duration was one of the biggest challenges.

## 2. Session Storage Management
Managing data across multiple pages using `sessionStorage`, `JSON.stringify()`, and `JSON.parse()` required careful handling.

## 3. Responsive Design
Making the website responsive across mobile, tablet, and desktop screens required multiple UI adjustments.

## 4. Dynamic HTML Rendering
Creating HTML dynamically using JavaScript and `innerHTML` was challenging because small syntax mistakes affected layouts.

## 5. Dark Mode Integration
Maintaining proper UI visibility and color contrast in both dark and light themes required additional testing.

---

#  What I Learned

Through this project I learned:
- Real-world JavaScript development
- DOM manipulation
- Dynamic webpage generation
- Session storage handling
- Event listeners
- Responsive UI design
- Flexbox layouts
- Scroll animations
- Frontend project structuring
- Debugging JavaScript logic

---

#  Future Improvements

Future enhancements planned:
- Backend integration
- Real hotel and flight APIs
- AI-based trip recommendations
- PDF itinerary export
- Weather integration
- User authentication
- Favorite destinations feature
- Multi-language support

---

#  Team Members 

**Govardhan,Sathvik,Vikrant,Shusanth**  
---

#  Final Note

This project was built as a frontend learning project to improve my understanding of JavaScript, responsive web design, and dynamic UI generation. It helped me understand how real-world interactive travel websites are designed and implemented.
