//Element IDs
const myHeading = document.getElementById('myHeading');
const lilP = document.getElementById('lilP');
const bodyOfPage = document.getElementById('bodyOfPage');
const navbar = document.getElementById('navbar');

//Text input IDs
const changeHeadingColor = document.getElementById('changeHeadingColor');
const changeTextColor = document.getElementById('changeTextColor');
const changeBackgroundColor = document.getElementById('changeBackgroundColor');
const changeNavbarColor = document.getElementById('changeNavbarColor');
const changeNavbarTextColor = document.getElementById('changeNavbarTextColor');

//button IDs
const headingColor = document.getElementById('headingColor');
const textColor = document.getElementById('textColor');
const backgroundColor = document.getElementById('backgroundColor');
const navbarColor = document.getElementById('navbarColor');
const navbarTextColor = document.getElementById('navbarTextColor');

headingColor.addEventListener('click', () => {
  myHeading.style.color = changeHeadingColor.value;
});

textColor.addEventListener('click', () => {
  lilP.style.color= changeTextColor.value;
});

backgroundColor.addEventListener('click', () => {
  bodyOfPage.style.backgroundColor = changeBackgroundColor.value;
});

navbarColor.addEventListener('click', () => {
  navbar.style.backgroundColor = changeNavbarColor.value;
});

navbarTextColor.addEventListener('click', () => {
  navbar.style.color = changeNavbarTextColor.value;
});
