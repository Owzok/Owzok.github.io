const btn = document.querySelector(".menu-btn"); // show side menu button

const homebtn = document.querySelector(".home-btn");

const route1 = document.querySelector(".mt-1"); // major related courses
const route2 = document.querySelector(".mt-2"); // personal projects
const route3 = document.querySelector(".mt-3"); // work experience

const targetDiv = document.getElementById("side-menu");

const transitionDiv = document.getElementById("bmt")

let opened = false;

homebtn.addEventListener('click', function () {
    transitionDiv.className = 'black-menu-trans';
    setTimeout(function(){
        goHome();
    }, 1000) 
});

route1.addEventListener('click', function () {
    transitionDiv.className = 'black-menu-trans';
    setTimeout(function(){
        goCourses();
    }, 1500) 
});

route2.addEventListener('click', function () {
    transitionDiv.className = 'black-menu-trans';
    setTimeout(function(){
        goProjects();
    }, 1500) 
});

route3.addEventListener('click', function () {
    transitionDiv.className = 'black-menu-trans';
    setTimeout(function(){
        goWork();
    }, 1500) 
});

function goHome(){ window.location.href = "index.html"; }
function goCourses(){ window.location.href = "courses.html"; }
function goProjects(){ window.location.href = "projects.html"; }
function goWork(){ window.location.href = "work.html"; }

btn.addEventListener('click', () => {
    if(!opened){
        btn.classList.add('open');
        targetDiv.classList.add("side-entry-menu");
        targetDiv.classList.remove("side-out-menu");

    } else {
        btn.classList.remove('open');
        targetDiv.classList.add("side-out-menu");
        targetDiv.classList.remove("side-entry-menu");
    }
    opened = !opened;
})


