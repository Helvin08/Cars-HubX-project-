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
// Handle the left navigation button (❮)
function prevpage() {
    window.location.href = "index.html"; 
  }
// Handle the right navigation button (❯)
function nextpage() {
    window.location.href = "index2.html"; 
  }
  //login button
function login() {
    window.location.href = "login.html"; 
  }
  //password button
   function togglePasswordVisibility() {
      const passwordInput = document.getElementById("password");
      const toggleIcon = document.querySelector(".toggle-password");

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
      } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
      }
    }
  //send email button
  function sendemail() {
    alert("An email has been sent to your address!");
  }
  //sign up button
  function submitme() {
    alert("Successfully Create your Account");
  }
  //first page box
  function BMW() {
    window.location.href = "/cars/BMW.html"; 
  }
  function benz() {
    window.location.href = "/cars/Mercedes Benz.html"; 
  }
  function Ferrari() {
    window.location.href = "/cars/Ferrari.html"; 
  }
  function Lamborghini() {
    window.location.href = "/cars/Lamborghini.html"; 
  }
  function Porsche() {
    window.location.href = "/cars/Porsche.html" ; 
  }
  function Ford() {
    window.location.href ="/cars/Ford.html"; 
  }
  //first page box 2
  function Audi() {
    window.location.href = "/cars/Audi.html" ; 
  }
  function Dodge() {
    window.location.href = "/cars/Dodge.html"; 
  }
  function Toyota() {
    window.location.href = "/cars/Toyota.html"; 
  }
  function Jeep() {
    window.location.href = "/cars/Jeep.html" ; 
  }
  function Jaguar() {
    window.location.href = "/cars/Jaguar.html"; 
  }
  function Maserati() {
    window.location.href ="/cars/Maserati.html"; 
  }
  function Bentley() {
    window.location.href ="/cars/Bentley.html" ; 
  }
  function Nissan() {
    window.location.href ="/cars/Nissan.html" ; 
  }
  function Alfa() {
    window.location.href ="/cars/Alfa Romeo.html"; 
  }
  function Honda() {
    window.location.href ="/cars/Honda.html"; 
  }
  function Hyundai() {
    window.location.href ="/cars/Hyundai.html"; 
  }
  function Subaru() {
    window.location.href ="/cars/Subaru.html"; 
  }
  function Chrysler() {
    window.location.href ="/cars/Chrysler.html"; 
  }
  function Cadillac() {
    window.location.href ="/cars/Cadillac.html"; 
  }
  function Mazda() {
    window.location.href ="/cars/Mazda.html"; 
  }
  function Bugatti() {
    window.location.href ="/cars/Bugatti.html"; 
  }
  function Lexus() {
    window.location.href ="/cars/Lexus.html"; 
  }
  function RR() {
    window.location.href ="/cars/Rolls Royce.html"; 
  }
  function Acura() {
    window.location.href ="/cars/Acura.html"; 
  }
  function Aston() {
    window.location.href ="/cars/Aston Martin.html"; 
  }
  function Chevrolet() {
    window.location.href ="/cars/Chevrolet.html"; 
  }
  function Kia() {
    window.location.href ="/cars/Kia.html"; 
  }
  function volkswagen() {
    window.location.href ="/cars/volkswagen.html"; 
  }
  function Abarth() {
    window.location.href ="/cars/Abarth.html"; 
  }
  //second page box

  function Volvo() {
    window.location.href ="/cars/Volvo.html" ; 
  }
  function Skoda() {
    window.location.href ="/cars/Skoda.html"; 
  }
  function mclaren() {
    window.location.href ="/cars/mclaren.html"; 
  }
  function GMC() {
    window.location.href ="/cars/GMC.html"; 
  }
  function Infiniti() {
    window.location.href ="/cars/Infiniti.html"; 
  }
  function Lincoln() {
    window.location.href ="/cars/Lincoln.html"; 
  }
  function Pontiac() {
    window.location.href ="/cars/Pontiac.html"; 
  }
  //second page box 2
  function Saab() {
    window.location.href ="/cars/Saab.html" ; 
  }
  function Genesis() {
    window.location.href ="/cars/Genesis.html" ; 
  }
  function Suzuki() {
    window.location.href ="/cars/Suzuki.html" ; 
  }
  function Mitsubishi() {
    window.location.href ="/cars/Mitsubishi.html" ; 
  }
  function Citroen() {
    window.location.href ="/cars/Citroen.html"; 
  }
  function Fiat() {
    window.location.href ="/cars/Fiat.html" ; 
  }
  function Lancia() {
    window.location.href ="/cars/Lancia.html" ; 
  }
  function Opel() {
    window.location.href ="/cars/Opel.html" ; 
  }
  function Lotus() {
    window.location.href ="/cars/Lotus.html" ; 
  }
  function Mini() {
    window.location.href ="/cars/Mini.html" ; 
  }
  function KTM() {
    window.location.href ="/cars/KTM.html" ; 
  }
  function Tesla() {
    window.location.href ="/cars/Tesla.html" ; 
  }
  function Tata() {
    window.location.href ="/cars/Tata.html" ; 
  }
  function Force() {
    window.location.href ="/cars/Force.html" ; 
  }
  function Mahindra() {
    window.location.href ="/cars/Mahindra.html"; 
  }
  function Renault() {
    window.location.href ="/cars/Renault.html"; 
  }
  function Rover() {
    window.location.href ="/cars/Land Rover.html"; 
  }
  function MG() {
    window.location.href ="/cars/MG.html"; 
  }
  function Pagani() {
    window.location.href ="/cars/Pagani.html" ; 
  }
  function Buick() {
    window.location.href ="/cars/Buick.html"; 
  }
  function Maybach() {
    window.location.href ="/cars/Maybach.html"; 
  }
  function corvette() {
    window.location.href ="/cars/Chevrolet corvette.html"; 
  }
  function Toyota() {
    window.location.href ="/cars/Toyota.html"; 
  }
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
  
