// JavaScript alert
alert("Welcome to the Valorant website!");

// Link to different website on the topic
const officialWebsiteLink = document.querySelector('a[href="https://playvalorant.com/"]');
officialWebsiteLink.setAttribute('target', '_blank');

// Link to all other pages
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(function(navLink) {
  navLink.setAttribute('title', navLink.textContent);
});

// MDL components
// Component 1: Button
const button = document.createElement('button');
button.textContent = 'Click
