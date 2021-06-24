
/* Sistema "ver mais" */


function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "&nbsp;Ver mais";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "&nbsp;Encolher";
      moreText.style.display = "inline";
    }
  }

/* Sistema pop up do usuário */

function abrir () {
  document.getElementById('user-popup').style.display = 'block';
};

function fechar () {
  document.getElementById('user-popup').style.display = 'none';
};