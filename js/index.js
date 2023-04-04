const btnProjects = document.querySelector("#btn1-proj")
btnProjects.addEventListener('click', function () {
    transitionDiv.className = 'black-menu-trans';
    setTimeout(function(){
    goProjects();
    }, 1500) 
});

let valueDisplays = document.querySelectorAll(".num");
let interval = 1500;

function weeksBetween(d1, d2) {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}

function yearsBetween(d1, d2) {
    return Math.round((d1 - d2) / ( 12 * 31 * 24 * 60 * 60 * 1000));
}

const weeksatr = document.querySelector("#weeks").setAttribute("data-val",weeksBetween(new Date(), new Date(2025,07,01)));
const yearsatr = document.querySelector("#years").setAttribute("data-val",yearsBetween(new Date(), new Date(2003,09,26)));

setTimeout(function(){
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval/endValue);
        let counter = setInterval(function() {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if(startValue == endValue){
                clearInterval(counter);
            }
        }, duration);
    })}, 2400);