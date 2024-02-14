/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== RENDER SKILLS SECION ====================*/

var skillsData = [
    {
        title: "Frontend Development",
        iconName: "bi-braces",
        open:"skills__open",
        skillItems: [
            { name: "HTML", percentage: "90%"},
            { name: "CSS", percentage: "60%"},
            { name: "JavaScript", percentage: "70%"},
            { name: "React", percentage: "50%"},
            { name: "Angular", percentage: "70%"},
        ]
    },
    {
        title: "Backend Development",
        iconName: "bi-diagram-3",
        open:"skills__close",
        skillItems: [
            { name: "Java", percentage: "90%" },
            { name: "Python", percentage: "50%"},
            { name: "Node JS", percentage: "50%"},
        ]
    },
    {
        title: "Databases",
        iconName: "bi-database",
        open:"skills__close",
        skillItems: [
            { name: "MySQL", percentage: "70%"},
            { name: "MongoDB", percentage: "50%" },
        ]
    }

];

renderSkills(skillsData)

function renderSkills(data) {
    var container = document.getElementById("skills-container");

    data.forEach(function(skillCategory) {
        var categoryDiv = document.createElement("div");
        categoryDiv.classList.add("skills__content",skillCategory.open);

        var headerDiv = document.createElement("div");
        headerDiv.classList.add("skills__header");

        var icon = document.createElement("i");
        icon.classList.add("bi", skillCategory.iconName, "skills__icon");
        headerDiv.appendChild(icon);

        var titleDiv = document.createElement("div");
        var title = document.createElement("h1");
        title.classList.add("skills__title");
        title.setAttribute("id", "skills-title");
        title.textContent = skillCategory.title;
        titleDiv.appendChild(title);
        headerDiv.appendChild(titleDiv);

        var arrowIcon = document.createElement("i");
        arrowIcon.classList.add("bi", "bi-caret-down-fill", "skills__arrow");
        headerDiv.appendChild(arrowIcon);

        categoryDiv.appendChild(headerDiv);

        var listDiv = document.createElement("div");
        listDiv.classList.add("skills__list", "grid");

        skillCategory.skillItems.forEach(function(skillItem) {
            var dataDiv = document.createElement("div");
            dataDiv.classList.add("skills__data");

            var titleDiv = document.createElement("div");
            titleDiv.classList.add("skills__titles");
            var skillName = document.createElement("h3");
            skillName.classList.add("skills__name");
            skillName.textContent = skillItem.name;
            titleDiv.appendChild(skillName);
            var skillNumber = document.createElement("span");
            skillNumber.classList.add("skills__number");
            skillNumber.textContent = skillItem.percentage;
            titleDiv.appendChild(skillNumber);
            dataDiv.appendChild(titleDiv);

            var barDiv = document.createElement("div");
            barDiv.classList.add("skills__bar");
            var percentageSpan = document.createElement("span");
            percentageSpan.style.width = skillItem.percentage;
            percentageSpan.classList.add("skills__percentage");
            barDiv.appendChild(percentageSpan);
            dataDiv.appendChild(barDiv);

            listDiv.appendChild(dataDiv);
        });

        categoryDiv.appendChild(listDiv);

        container.appendChild(categoryDiv);
    });
}

/*==================== REMOVE MENU MOBILE ====================*/


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll('.skills__header');


function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/


/*==================== Contact ====================*/
var emailSection = document.getElementById('email');

var email = 'munzirchnr@gmail.com';

emailSection.onclick = function() {
    var mailtoLink = 'mailto:' + email;
    window.location.href = mailtoLink;
};


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bi-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bi-moon' : 'bi-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bi-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})