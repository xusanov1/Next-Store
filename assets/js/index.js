var toogleButton = document.getElementById("toggle");
var iconMenu = document.getElementById("icon-menu");
var menuPanel = document.getElementById("menu-panel");

var loader=document.getElementById("loader");



// ----- toggle menu -----

toogleButton.addEventListener('click', function () {

    menuPanel.classList.toggle('hide-menu');
    if (!menuPanel.classList.contains('hide-menu')) {
        iconMenu.innerHTML = `<i class="bx bx-x"></i>`
    } else {
        iconMenu.innerHTML = `<i class="bx bx-menu"></i>`
    }
});

// ---- toggle menu -----


window.addEventListener("load",function(){
    console.log("menu loaded");
    loader.classList.add('loader-hide');
   
})

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
