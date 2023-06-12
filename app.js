// MENU VARIABLES
const menuButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#menu');
const menuButtonSpans = document.querySelectorAll('#menu-button span');
const links = document.querySelectorAll('#menu a');

//Abrir el menu
menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('hidden');

    menuButtonSpans.forEach((span) => {
        span.classList.toggle('animado');
    });
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        menuItems.classList.add('hidden');
        menuButtonSpans.forEach((span) => {
            span.classList.remove('animado');
        });
    });
});

//Cierre menu cuando maximiza
window.onresize = function () {
    let w = window.outerWidth;

    if (w > 768) {
        menuItems.classList.add('hidden');
        menuButtonSpans.forEach((span) => {
            span.classList.remove('animado');
        });
    }
};

//Modo oscuro

const darkButton = document.querySelector('#darkButton');

darkButton.addEventListener('click', function () {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});

//Mostrar habilidades con js
const skillSection = document.querySelector('#skillSection');
const articles = document.querySelectorAll('#skillSection article');


skillSection.addEventListener('click', (event)=>{
    const id = event.target.dataset.id;

    if(id)
    {
        articles.forEach((article)=>{
            article.classList.add('hidden');
        });
        const element = document.getElementById(id);
        element.classList.remove('hidden');
    }
});

const skilLinks = document.querySelectorAll('#skillSection button');
const firstLink = document.querySelector('#link1');

skilLinks.forEach((link)=>{
    link.addEventListener('click',()=>
    {
        firstLink.classList.remove('border-sky-500','bg-white','dark:bg-slate-700');
    });
});