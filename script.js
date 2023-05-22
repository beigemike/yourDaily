//var today = new Date();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//window.onload = document.getElementById("third").innerHTML = time;

function Blur() {

      
    //var navbar = document.querySelectorAll(".bg-body-tertiary");

    //navbar[0].setAttribute('style', 'background-color: none !important');

    //var navbarShadow = document.querySelectorAll(".bg-body-tertiary");

    //navbarShadow[0].setAttribute('style', 'box-shadow: none !important');

    //var navbarBorder = document.querySelectorAll(".bg-body-tertiary");

    //navbarBorder[0].setAttribute('style', 'border-bottom: 1px solid #D9D9D9 !important');

    //var btnAccedi = document.querySelectorAll(".btn-accedi");

    //btnAccedi[0].setAttribute('style', 'color: #2C2C2CCC !important');

    //x[0].setAttribute('style', 'backdrop-filter: blur(8px) !important');
    //x[0].setAttribute('style', 'border-bottom: 0 !important');
}

var button = document.getElementById('esploraToggle'); // Assumes element with id='button'

button.onclick = function() {
    var div = document.getElementById('esplora');
    if (div.style.display !== 'none') {
        div.style.display = 'none';
    }
    else {
        div.style.display = 'block';
    }
};

$(document).ready(function() {
    $('#rateMe1').mdbRate();
  });
