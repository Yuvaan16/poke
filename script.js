AOS.init();

const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// $(function(){
//   $("#nav-placeholder").load("nav.html");
// });


function myFunction() {
    var x = document.getElementById("click2");
    if (x.className === "row center") {
      void(0);
    } else {
      x.className = "row center";
    }

    }
    if (x.className === "row center hidden") {
      x.className = "row center";     
    } else {
      x.className = "row center hidden";
    }
