var navbar = document.querySelector('.navbar');
var menuBtn = document.querySelector('.menu-btn');

menuBtn.onclick = function () {
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
};

// Navbar Links

var home_link = document.querySelector('.home-link');
var about_link = document.querySelector('.about-link');
var github_link = document.querySelector('.github-link');
var portfolio_link = document.querySelector('.portfolio-link');

var home = document.querySelector('.home-container');
var about = document.querySelector('.about-container');
var github = document.querySelector('.github-container');
var portfolio = document.querySelector('.portfolio-container');

home_link.addEventListener("click", ()=> {
    home.style.display = 'block';

    about.style.display = 'none';
    github.style.display = 'none';
    portfolio.style.display = 'none';
})

about_link.addEventListener("click", ()=> {
    home.style.display = 'none';
    
    about.style.display = 'block';

    github.style.display = 'none';
    portfolio.style.display = 'none';
})

portfolio_link.addEventListener("click", ()=> {
    home.style.display = 'none';
    about.style.display = 'none';

    portfolio.style.display = 'block';

    github.style.display = 'none';
})

github_link.addEventListener("click", ()=> {
    home.style.display = 'none';
    about.style.display = 'none';
    portfolio.style.display = 'none';

    github.style.display = 'block';
})
