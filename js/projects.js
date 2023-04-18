const all = document.querySelector("#c-all"); 
const webdev = document.querySelector("#c-webdev"); 
const cpp = document.querySelector("#c-cpp"); 
const py = document.querySelector("#c-py"); 
const design = document.querySelector("#c-wdes"); 
const other = document.querySelector("#c-other"); 

const transitionDiv = document.getElementById("bmt")

all.addEventListener('click', function () {
   transitionDiv.className = 'black-menu-trans';
   setTimeout(function(){
         goCourses();
   }, 1500) 
});

webdev.addEventListener('click', function () {
   transitionDiv.className = 'black-menu-trans';
   setTimeout(function(){
       goWeb();
   }, 1500) 
});


cpp.addEventListener('click', function () {
   transitionDiv.className = 'black-menu-trans';
   setTimeout(function(){
       goCpp();
   }, 1500) 
});


py.addEventListener('click', function () {
   transitionDiv.className = 'black-menu-trans';
   setTimeout(function(){
       goPy();
   }, 1500) 
});


design.addEventListener('click', function () {
   transitionDiv.className = 'black-menu-trans';
   setTimeout(function(){
       goWdes();
   }, 1500) 
});


other.addEventListener('click', function () {
   transitionDiv.className = 'black-menu-trans';
   setTimeout(function(){
       goOth();
   }, 1500) 
});


function goAll(){ window.location.href = "projects.html"; }
function goWeb(){ window.location.href = "projects_webdev.html"; }
function goCpp(){ window.location.href = "projects_cpp.html"; }
function goPy(){ window.location.href = "projects_py.html"; }
function goWdes(){ window.location.href = "projects_design.html"; }
function goOth(){ window.location.href = "projects_others.html"; }