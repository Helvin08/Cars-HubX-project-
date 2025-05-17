//social-media//
function whatsapp() {
    window.location.href = "https://wa.me/+916383588709";
  }
function github() {
    window.location.href = "https://github.com/Helvin08";
  }
function youtube() {
    window.location.href = "https://www.youtube.com/channel/UC-t2QPsmo5UWktlYsOMSbYA";
  }
function github() {
    window.location.href = "https://github.com/Helvin08";
  }
function email() {
    window.location.href = "mailto:carshubx0@gmail.com"
  }
  function instagram() {
    window.location.href = "https://www.instagram.com/cars_hubx0?igsh=OHltODlnZmVlNTZw";
  }  function facebook() {
    const fbURL = {
      "@context": "https://schema.org",
      "@type": "Website",
      "url": "https://www.facebook.com/profile.php?id=61576162287553",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61576162287553"
      ]
    };
    window.location.href = fbURL.url;
  }
  function telegram() {
    window.location.href = "https://t.me/carshubx";
  }
  //home button//
  function home() {
    window.location.href = "/index.html";
  }
  //BMW button//
  function BMW() {
    window.location.href ="https://www.bmw.com/en/index.html"; 
  }
  function game(){
    window.location.href = "BMWcars.html";
  }  //google translation//
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false,
        includedLanguages: 'es,fr,de,it,pt,zh-CN,ja,ko,ta,hi,kn,ml,ar,ru,te',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
    var googleTranslate = document.querySelector('.skiptranslate');
    if (googleTranslate) {
        googleTranslate.style.display = 'none';
    }
}

function showGoogleTranslate() {
    var googleTranslateDiv = document.getElementById('google_translate_element');
    googleTranslateDiv.style.display = 'block'; // Show the translation element
}

function hideGoogleTranslate() {
    var googleTranslateDiv = document.getElementById('google_translate_element');
    googleTranslateDiv.style.display = 'none'; // Hide the translation element
}
//Explore button//
function explore(){
    window.location.href = "https://en.wikipedia.org/wiki/History_of_BMW";
  }

// Search functionality
function searchCars() {
    const searchInput = document.querySelector('.search_input');
    const searchTerm = searchInput.value.toLowerCase();    const carList = [
        { name: 'abarth', url: '/cars/Abarth.html' },
        { name: 'acura', url: '/cars/Acura.html' },
        { name: 'alfa romeo', url: '/cars/Alfa Romeo.html' },
        { name: 'aston martin', url: '/cars/Aston Martin.html' },
        { name: 'audi', url: '/cars/Audi.html' },
        { name: 'bentley', url: '/cars/Bentley.html' },
        { name: 'bmw', url: '/cars/BMW.html' },
        { name: 'bugatti', url: '/cars/Bugatti.html' },
        { name: 'buick', url: '/cars/Buick.html' },        { name: 'cadillac', url: '/cars/Cadillac.html' },
        { name: 'chevrolet', url: '/cars/Chevrolet.html' },
        { name: 'chevrolet corvette', url: '/cars/Chevrolet corvette.html' },
        { name: 'chrysler', url: '/cars/Chrysler.html' },
        { name: 'citroen', url: '/cars/Citroen.html' },
        { name: 'dodge', url: '/cars/Dodge.html' },
        { name: 'ferrari', url: '/cars/Ferrari.html' },
        { name: 'fiat', url: '/cars/Fiat.html' },
        { name: 'force', url: '/cars/Force.html' },
        { name: 'ford', url: '/cars/Ford.html' },
        { name: 'genesis', url: '/cars/Genesis.html' },
        { name: 'gmc', url: '/cars/GMC.html' },
        { name: 'honda', url: '/cars/Honda.html' },
        { name: 'hyundai', url: '/cars/Hyundai.html' },
        { name: 'infiniti', url: '/cars/Infiniti.html' },
        { name: 'jaguar', url: '/cars/Jaguar.html' },
        { name: 'jeep', url: '/cars/Jeep.html' },
        { name: 'kia', url: '/cars/Kia.html' },
        { name: 'ktm', url: '/cars/KTM.html' },
        { name: 'lamborghini', url: '/cars/Lamborghini.html' },
        { name: 'lancia', url: '/cars/Lancia.html' },
        { name: 'land rover', url: '/cars/Land Rover.html' },
        { name: 'lexus', url: '/cars/Lexus.html' },
        { name: 'lincoln', url: '/cars/Lincoln.html' },
        { name: 'lotus', url: '/cars/Lotus.html' },
        { name: 'mahindra', url: '/cars/Mahindra.html' },
        { name: 'maserati', url: '/cars/Maserati.html' },
        { name: 'maybach', url: '/cars/Maybach.html' },
        { name: 'mazda', url: '/cars/Mazda.html' },
        { name: 'mclaren', url: '/cars/mclaren.html' },
        { name: 'mercedes benz', url: '/cars/Mercedes Benz.html' },
        { name: 'mini', url: '/cars/Mini.html' },
        { name: 'mitsubishi', url: '/cars/Mitsubishi.html' },
        { name: 'nissan', url: '/cars/Nissan.html' },
        { name: 'opel', url: '/cars/Opel.html' },
        { name: 'pagani', url: '/cars/Pagani.html' },
        { name: 'pontiac', url: '/cars/Pontiac.html' },
        { name: 'porsche', url: '/cars/Porsche.html' },
        { name: 'renault', url: '/cars/Renault.html' },
        { name: 'rolls royce', url: '/cars/Rolls Royce.html' },
        { name: 'saab', url: '/cars/Saab.html' },
        { name: 'skoda', url: '/cars/Skoda.html' },
        { name: 'subaru', url: '/cars/Subaru.html' },
        { name: 'suzuki', url: '/cars/Suzuki.html' },
        { name: 'tata', url: '/cars/Tata.html' },
        { name: 'tesla', url: '/cars/Tesla.html' },
        { name: 'toyota', url: '/cars/Toyota.html' },
        { name: 'volkswagen', url: '/cars/volkswagen.html' },
        { name: 'volvo', url: '/cars/Volvo.html' }
    ];

    // If search term is not empty
    if (searchTerm) {
        const matchedCar = carList.find(car => car.name.toLowerCase().includes(searchTerm));
        if (matchedCar) {
            window.location.href = matchedCar.url;
        }
    }
}

// Add event listener for search input
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search_input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchCars();
            }
        });
    }
});

