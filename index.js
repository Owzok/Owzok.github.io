const btnProjects = document.querySelector("#btn1-proj")
btnProjects.addEventListener('click', function () {
    transitionDiv.className = 'black-menu-trans';
    setTimeout(function(){
    goProjects();
    }, 1500) 
});

let valueDisplays = document.querySelectorAll(".num");
let interval = 1500;

setTimeout(function(){
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        console.log(endValue);
        let duration = Math.floor(interval/endValue);
        let counter = setInterval(function() {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if(startValue == endValue){
                clearInterval(counter);
            }
        }, duration);
    })}, 2400);