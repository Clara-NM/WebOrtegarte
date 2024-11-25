



let aboutMeButton = document.getElementById('aboutMeButton');
if (aboutMeButton) {
  aboutMeButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'aboutMe.html';
  });
}

let work = document.getElementById('work');
if (work) {
  work.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'work.html';
  });
}

let shop = document.getElementById('shop');
if (shop) {
  shop.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = 'shop.html';
  });
}


function cambiarIdioma(idioma) {
  const infoTexto = document.getElementById('infoTexto');
  if (idioma === 'en') {
    infoTexto.innerText = 'This is info about me'; 
  } else if (idioma === 'es') {
    infoTexto.innerText = 'Esto es info sobre mí'; 
  }
}

window.onload = function () {
 
  setTimeout(function () {
    let preloader = document.getElementById('preloader');
    let content = document.getElementById('content');
    
    if (preloader) {
      preloader.style.display = 'none';
    }
    
    if (content) {
      content.classList.add('show');
    }
  }, 3000); 

  cambiarIdioma('es');

  
  document.getElementById('engButton').addEventListener('click', function () {
    cambiarIdioma('en'); 
  });

  document.getElementById('espButton').addEventListener('click', function () {
    cambiarIdioma('es'); 
  });
};






