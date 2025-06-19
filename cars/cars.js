// Helper function to handle page transitions with loading
function navigateWithLoading(url, isNewTab = false) {
    if (isNewTab) {
        window.open(url, "_blank");
        return;
    }
    sessionStorage.setItem('nextPage', url);
    window.location.href = '/loading.html';
}

//social-media//

function youtube() {
    navigateWithLoading("https://www.youtube.com/channel/UC-t2QPsmo5UWktlYsOMSbYA", true);
}
function github() {
    navigateWithLoading("https://github.com/Helvin08", true);
}
function email() {
    window.location.href = "mailto:carshubx0@gmail.com";
}
function instagram() {
    navigateWithLoading("https://www.instagram.com/cars_hubx0?igsh=OHltODlnZmVlNTZw", true);
}
function facebook() {
    navigateWithLoading("https://www.facebook.com/profile.php?id=61576162287553", true);
}
function telegram() {
    navigateWithLoading("https://t.me/carshubx", true);
}
//home button//
function home() {
    navigateWithLoading("/index.html");
}
//BMW button//
function BMW() {
    navigateWithLoading("https://www.bmw.com/en/index.html", true);
}
function Benz() {
    navigateWithLoading("https://www.mercedes-benz.com/en/", true);
}
function Abarth(){
    navigateWithLoading("https://www.abarth.com/", true);
}
function game() {
    navigateWithLoading("BMWcars.html");
} //google translation//

let isTranslateVisible = false;
let translateInitialized = false;

function googleTranslateElementInit() {
  if (!translateInitialized) {
    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "es,fr,de,it,pt,zh-CN,ja,ko,ta,hi,kn,ml,ar,ru,te",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      "google_translate_element"
    );
    translateInitialized = true;
  }

  // Hide the translate element initially
  const translateDiv = document.getElementById("google_translate_element");
  if (translateDiv) {
    translateDiv.style.display = "none";
    translateDiv.style.opacity = "0";
  }
}

function showGoogleTranslate() {
  const translateDiv = document.getElementById("google_translate_element");
  if (translateDiv) {
    isTranslateVisible = !isTranslateVisible;
    if (isTranslateVisible) {
      translateDiv.style.display = "block";
      // Use setTimeout to ensure the display change has taken effect
      setTimeout(() => {
        translateDiv.style.opacity = "1";
        translateDiv.style.visibility = "visible";
        translateDiv.style.transform = "translateY(0)";
      }, 10);
    } else {
      translateDiv.style.opacity = "0";
      translateDiv.style.visibility = "hidden";
      translateDiv.style.transform = "translateY(-10px)";
      // Hide the element after the animation
      setTimeout(() => {
        translateDiv.style.display = "none";
      }, 300);
    }
  }
}

//Explore button//
function explore() {
    navigateWithLoading("https://en.wikipedia.org/wiki/History_of_BMW", true);
}
function explore1() {
    navigateWithLoading("https://en.wikipedia.org/wiki/Mercedes-Benz", true);
}
function explore2() {
    navigateWithLoading("https://en.wikipedia.org/wiki/Abarth", true);
}


// Search functionality
function searchCars() {
  const searchInput = document.querySelector(".search_input");
  const searchTerm = searchInput.value.toLowerCase();
  const carList = [
    { name: "abarth", url: "/cars/Abarth.html" },
    { name: "acura", url: "/cars/Acura.html" },
    { name: "alfa romeo", url: "/cars/Alfa Romeo.html" },
    { name: "aston martin", url: "/cars/Aston Martin.html" },
    { name: "audi", url: "/cars/Audi.html" },
    { name: "bentley", url: "/cars/Bentley.html" },
    { name: "bmw", url: "/cars/BMW.html" },
    { name: "bugatti", url: "/cars/Bugatti.html" },
    { name: "buick", url: "/cars/Buick.html" },
    { name: "cadillac", url: "/cars/Cadillac.html" },
    { name: "chevrolet", url: "/cars/Chevrolet.html" },
    { name: "chevrolet corvette", url: "/cars/Chevrolet corvette.html" },
    { name: "chrysler", url: "/cars/Chrysler.html" },
    { name: "citroen", url: "/cars/Citroen.html" },
    { name: "dodge", url: "/cars/Dodge.html" },
    { name: "ferrari", url: "/cars/Ferrari.html" },
    { name: "fiat", url: "/cars/Fiat.html" },
    { name: "force", url: "/cars/Force.html" },
    { name: "ford", url: "/cars/Ford.html" },
    { name: "genesis", url: "/cars/Genesis.html" },
    { name: "gmc", url: "/cars/GMC.html" },
    { name: "honda", url: "/cars/Honda.html" },
    { name: "hyundai", url: "/cars/Hyundai.html" },
    { name: "infiniti", url: "/cars/Infiniti.html" },
    { name: "jaguar", url: "/cars/Jaguar.html" },
    { name: "jeep", url: "/cars/Jeep.html" },
    { name: "kia", url: "/cars/Kia.html" },
    { name: "ktm", url: "/cars/KTM.html" },
    { name: "lamborghini", url: "/cars/Lamborghini.html" },
    { name: "lancia", url: "/cars/Lancia.html" },
    { name: "land rover", url: "/cars/Land Rover.html" },
    { name: "lexus", url: "/cars/Lexus.html" },
    { name: "lincoln", url: "/cars/Lincoln.html" },
    { name: "lotus", url: "/cars/Lotus.html" },
    { name: "mahindra", url: "/cars/Mahindra.html" },
    { name: "maserati", url: "/cars/Maserati.html" },
    { name: "maybach", url: "/cars/Maybach.html" },
    { name: "mazda", url: "/cars/Mazda.html" },
    { name: "mclaren", url: "/cars/mclaren.html" },
    { name: "mercedes benz", url: "/cars/Mercedes Benz.html" },
    { name: "mini", url: "/cars/Mini.html" },
    { name: "mitsubishi", url: "/cars/Mitsubishi.html" },
    { name: "nissan", url: "/cars/Nissan.html" },
    { name: "opel", url: "/cars/Opel.html" },
    { name: "pagani", url: "/cars/Pagani.html" },
    { name: "pontiac", url: "/cars/Pontiac.html" },
    { name: "porsche", url: "/cars/Porsche.html" },
    { name: "renault", url: "/cars/Renault.html" },
    { name: "rolls royce", url: "/cars/Rolls Royce.html" },
    { name: "saab", url: "/cars/Saab.html" },
    { name: "skoda", url: "/cars/Skoda.html" },
    { name: "subaru", url: "/cars/Subaru.html" },
    { name: "suzuki", url: "/cars/Suzuki.html" },
    { name: "tata", url: "/cars/Tata.html" },
    { name: "tesla", url: "/cars/Tesla.html" },
    { name: "toyota", url: "/cars/Toyota.html" },
    { name: "volkswagen", url: "/cars/volkswagen.html" },
    { name: "volvo", url: "/cars/Volvo.html" },
    { name:"mg", url:"/cars/MG.html"},
    /*wallpaper*/
    { name: "abarth wallpaper", url: "/cars/Abarth.html" },
    { name: "acura wallpaper", url: "/cars/Acura.html" },
    { name: "alfa romeo wallpaper", url: "/cars/Alfa Romeo.html" },
    { name: "aston martin wallpaper", url: "/cars/Aston Martin.html" },
    { name: "audi wallpaper", url: "/cars/Audi.html" },
    { name: "bentley wallpaper", url: "/cars/Bentley.html" },
    { name: "bmw wallpaper", url: "/cars/BMW.html" },
    { name: "bugatti wallpaper", url: "/cars/Bugatti.html" },
    { name: "buick wallpaper", url: "/cars/Buick.html" },
    { name: "cadillac wallpaper", url: "/cars/Cadillac.html" },
    { name: "chevrolet wallpaper", url: "/cars/Chevrolet.html" },
    { name: "chevrolet corvette wallpaper", url: "/cars/Chevrolet corvette.html" },
    { name: "chrysler wallpaper", url: "/cars/Chrysler.html" },
    { name: "citroen wallpaper", url: "/cars/Citroen.html" },
    { name: "dodge wallpaper", url: "/cars/Dodge.html" },
    { name: "ferrari wallpaper", url: "/cars/Ferrari.html" },
    { name: "fiat wallpaper", url: "/cars/Fiat.html" },
    { name: "force wallpaper", url: "/cars/Force.html" },
    { name: "ford wallpaper", url: "/cars/Ford.html" },
    { name: "genesis wallpaper", url: "/cars/Genesis.html" },
    { name: "gmc wallpaper", url: "/cars/GMC.html" },
    { name: "honda wallpaper", url: "/cars/Honda.html" },
    { name: "hyundai wallpaper", url: "/cars/Hyundai.html" },
    { name: "infiniti wallpaper", url: "/cars/Infiniti.html" },
    { name: "jaguar wallpaper", url: "/cars/Jaguar.html" },
    { name: "jeep wallpaper", url: "/cars/Jeep.html" },
    { name: "kia wallpaper", url: "/cars/Kia.html" },
    { name: "ktm wallpaper", url: "/cars/KTM.html" },
    { name: "lamborghini wallpaper", url: "/cars/Lamborghini.html" },
    { name: "lancia wallpaper", url: "/cars/Lancia.html" },
    { name: "land rover wallpaper", url: "/cars/Land Rover.html" },
    { name: "lexus wallpaper", url: "/cars/Lexus.html" },
    { name: "lincoln wallpaper", url: "/cars/Lincoln.html" },
    { name: "lotus wallpaper", url: "/cars/Lotus.html" },
    { name: "mahindra wallpaper", url: "/cars/Mahindra.html" },
    { name: "maserati wallpaper", url: "/cars/Maserati.html" },
    { name: "maybach wallpaper", url: "/cars/Maybach.html" },
    { name: "mazda wallpaper", url: "/cars/Mazda.html" },
    { name: "mclaren wallpaper", url: "/cars/mclaren.html" },
    { name: "mercedes benz wallpaper", url: "/cars/Mercedes Benz.html" },
    { name: "mini wallpaper", url: "/cars/Mini.html" },
    { name: "mitsubishi wallpaper", url: "/cars/Mitsubishi.html" },
    { name: "nissan wallpaper", url: "/cars/Nissan.html" },
    { name: "opel wallpaper", url: "/cars/Opel.html" },
    { name: "pagani wallpaper", url: "/cars/Pagani.html" },
    { name: "pontiac wallpaper", url: "/cars/Pontiac.html" },
    { name: "porsche wallpaper", url: "/cars/Porsche.html" },
    { name: "renault wallpaper", url: "/cars/Renault.html" },
    { name: "rolls royce wallpaper", url: "/cars/Rolls Royce.html" },
    { name: "saab wallpaper", url: "/cars/Saab.html" },
    { name: "skoda wallpaper", url: "/cars/Skoda.html" },
    { name: "subaru wallpaper", url: "/cars/Subaru.html" },
    { name: "suzuki wallpaper", url: "/cars/Suzuki.html" },
    { name: "tata wallpaper", url: "/cars/Tata.html" },
    { name: "tesla wallpaper", url: "/cars/Tesla.html" },
    { name: "toyota wallpaper", url: "/cars/Toyota.html" },
    { name: "volkswagen wallpaper", url: "/cars/volkswagen.html" },
    { name: "volvo wallpaper", url: "/cars/Volvo.html" },
    { name:"mg wallpaper", url:"/cars/MG.html"},
     /*history*/
    { name: "abarth history", url: "/cars/Abarth hs.html" },
    { name: "acura history", url: "/cars/Acura hs.html" },
    { name: "alfa romeo history", url: "/cars/Alfa hs.html" },
    { name: "aston martin history", url: "/cars/Aston hs.html" },
    { name: "audi history", url: "/cars/Audi hs.html" },
    { name: "bentley history", url: "/cars/Bentley hs.html" },
    { name: "bmw history", url: "/cars/BMW hs.html" },
    { name: "bugatti history", url: "/cars/Bugatti hs.html" },
    { name: "buick history", url: "/cars/Buick hs.html" },
    { name: "cadillac history", url: "/cars/Cadillac hs.html" },
    { name: "chevrolet history", url: "/cars/Chevrolet hs.html" },
    { name: "chevrolet corvette history", url: "/cars/Chevrolet co hs.html" },
    { name: "chrysler history", url: "/cars/Chrysler hs.html" },
    { name: "citroen history", url: "/cars/Citroen hs.html" },
    { name: "dodge history", url: "/cars/Dodge hs.html" },
    { name: "ferrari history", url: "/cars/Ferrari hs.html" },
    { name: "fiat history", url: "/cars/Fiat hs.html" },
    { name: "force history", url: "/cars/Force hs.html" },
    { name: "ford history", url: "/cars/Ford hs.html" },
    { name: "genesis history", url: "/cars/Genesis hs.html" },
    { name: "gmc history", url: "/cars/GMC hs.html" },
    { name: "honda history", url: "/cars/Honda hs.html" },
    { name: "hyundai history", url: "/cars/Hyundai hs.html" },
    { name: "infiniti history", url: "/cars/Infiniti hs.html" },
    { name: "jaguar history", url: "/cars/Jaguar hs.html" },
    { name: "jeep history", url: "/cars/Jeep hs.html" },
    { name: "kia history", url: "/cars/Kia hs.html" },
    { name: "ktm history", url: "/cars/KTM hs.html" },
    { name: "lamborghini history", url: "/cars/Lamborghini hs.html" },
    { name: "lancia history", url: "/cars/Lancia hs.html" },
    { name: "land rover history", url: "/cars/Land Rover hs.html" },
    { name: "lexus history", url: "/cars/Lexus hs.html" },
    { name: "lincoln history", url: "/cars/Lincoln hs.html" },
    { name: "lotus history", url: "/cars/Lotus hs.html" },
    { name: "mahindra history", url: "/cars/Mahindra hs.html" },
    { name: "maserati history", url: "/cars/Maserati hs.html" },
    { name: "maybach history", url: "/cars/Maybach hs.html" },
    { name: "mazda history", url: "/cars/Mazda hs.html" },
    { name: "mclaren history", url: "/cars/mclaren hs.html" },
    { name: "mercedes benz history", url: "/cars/Mercedes hs.html" },
    { name: "mini history", url: "/cars/Mini hs.html" },
    { name: "mitsubishi history", url: "/cars/Mitsubishi hs.html" },
    { name: "nissan history", url: "/cars/Nissan hs.html" },
    { name: "opel history", url: "/cars/Opel hs.html" },
    { name: "pagani history", url: "/cars/Pagani hs.html" },
    { name: "pontiac history", url: "/cars/Pontiac hs.html" },
    { name: "porsche history", url: "/cars/Porsche hs.html" },
    { name: "renault history", url: "/cars/Renault hs.html" },
    { name: "rolls royce history", url: "/cars/Rolls hs.html" },
    { name: "saab history", url: "/cars/Saab hs.html" },
    { name: "skoda history", url: "/cars/Skoda hs.html" },
    { name: "subaru history", url: "/cars/Subaru hs.html" },
    { name: "suzuki history", url: "/cars/Suzuki hs.html" },
    { name: "tata history", url: "/cars/Tata hs.html" },
    { name: "tesla history", url: "/cars/Tesla hs.html" },
    { name: "toyota history", url: "/cars/Toyota hs.html" },
    { name: "volkswagen history", url: "/cars/volkswagen hs.html" },
    { name: "volvo history", url: "/cars/Volvo hs.html" },
    /*Mobile wallpaper*/
    { name: "abarth mobile wallpaper", url: "/cars/Abarth mobile wall.html" },
    { name: "acura mobile wallpaper", url: "/cars/Acura mobile wall.html" },
    { name: "alfa romeo mobile wallpaper", url: "/cars/Alfa mobile wall.html" },
    { name: "aston martin mobile wallpaper", url: "/cars/Aston mobile wall.html" },
    { name: "audi mobile wallpaper", url: "/cars/Audi mobile wall.html" },
    { name: "bentley mobile wallpaper", url: "/cars/Bentley mobile wall.html" },
    { name: "bmw mobile wallpaper", url: "/cars/BMW mobile wall.html" },
    { name: "bugatti mobile wallpaper", url: "/cars/Bugatti mobile wall.html" },
    { name: "buick mobile wallpaper", url: "/cars/Buick mobile wall.html" },
    { name: "cadillac mobile wallpaper", url: "/cars/Cadillac mobile wall.html" },
    { name: "chevrolet mobile wallpaper", url: "/cars/Chevrolet mobile wall.html" },
    { name: "chevrolet corvette mobile wallpaper", url: "/cars/Chevrolet co mobile wall.html" },
    { name: "chrysler mobile wallpaper", url: "/cars/Chrysler mobile wall.html" },
    { name: "citroen mobile wallpaper", url: "/cars/Citroen mobile wall.html" },
    { name: "dodge mobile wallpaper", url: "/cars/Dodge mobile wall.html" },
    { name: "ferrari mobile wallpaper", url: "/cars/Ferrari mobile wall.html" },
    { name: "fiat mobile wallpaper", url: "/cars/Fiat mobile wall.html" },
    { name: "force mobile wallpaper", url: "/cars/Force mobile wall.html" },
    { name: "ford mobile wallpaper", url: "/cars/Ford mobile wall.html" },
    { name: "genesis mobile wallpaper", url: "/cars/Genesis mobile wall.html" },
    { name: "gmc mobile wallpaper", url: "/cars/GMC mobile wall.html" },
    { name: "honda mobile wallpaper", url: "/cars/Honda mobile wall.html" },
    { name: "hyundai mobile wallpaper", url: "/cars/Hyundai mobile wall.html" },
    { name: "infiniti mobile wallpaper", url: "/cars/Infiniti mobile wall.html" },
    { name: "jaguar mobile wallpaper", url: "/cars/Jaguar mobile wall.html" },
    { name: "jeep mobile wallpaper", url: "/cars/Jeep mobile wall.html" },
    { name: "kia mobile wallpaper", url: "/cars/Kia mobile wall.html" },
    { name: "ktm mobile wallpaper", url: "/cars/KTM mobile wall.html" },
    { name: "lamborghini mobile wallpaper", url: "/cars/Lamborghini mobile wall.html" },
    { name: "lancia mobile wallpaper", url: "/cars/Lancia mobile wall.html" },
    { name: "land rover mobile wallpaper", url: "/cars/Land mobile wall.html" },
    { name: "lexus mobile wallpaper", url: "/cars/Lexus mobile wall.html" },
    { name: "lincoln mobile wallpaper", url: "/cars/Lincoln mobile wall.html" },
    { name: "lotus mobile wallpaper", url: "/cars/Lotus mobile wall.html" },
    { name: "mahindra mobile wallpaper", url: "/cars/Mahindra mobile wall.html" },
    { name: "maserati mobile wallpaper", url: "/cars/Maserati mobile wall.html" },
    { name: "maybach mobile wallpaper", url: "/cars/Maybach mobile wall.html" },
    { name: "mazda mobile wallpaper", url: "/cars/Mazda mobile wall.html" },
    { name: "mclaren mobile wallpaper", url: "/cars/mclaren mobile wall.html" },
    { name: "mercedes benz mobile wallpaper", url: "/cars/Mercedes Benz.html" },
    { name: "mini mobile wallpaper", url: "/cars/Mini mobile wall.html" },
    { name: "mitsubishi mobile wallpaper", url: "/cars/Mitsubishi mobile wall.html" },
    { name: "nissan mobile wallpaper", url: "/cars/Nissan mobile wall.html" },
    { name: "opel mobile wallpaper", url: "/cars/Opel mobile wall.html" },
    { name: "pagani mobile wallpaper", url: "/cars/Pagani mobile wall.html" },
    { name: "pontiac mobile wallpaper", url: "/cars/Pontiac mobile wall.html" },
    { name: "porsche mobile wallpaper", url: "/cars/Porsche mobile wall.html" },
    { name: "renault mobile wallpaper", url: "/cars/Renault mobile wall.html" },
    { name: "rolls royce mobile wallpaper", url: "/cars/Rolls mobile wall.html" },
    { name: "saab mobile wallpaper", url: "/cars/Saab mobile wall.html"},
    { name: "skoda mobile wallpaper", url: "/cars/Skoda mobile wall.html" },
    { name: "subaru mobile wallpaper", url: "/cars/Subaru mobile wall.html" },
    { name: "suzuki mobile wallpaper", url: "/cars/Suzuki mobile wall.html" },
    { name: "tata mobile wallpaper", url: "/cars/Tata mobile wall.html" },
    { name: "tesla mobile wallpaper", url: "/cars/Tesla mobile wall.html" },
    { name: "toyota mobile wallpaper", url: "/cars/Toyota mobile wall.html" },
    { name: "volkswagen mobile wallpaper", url: "/cars/volkswagen mobile wall.html" },
    { name: "volvo mobile wallpaper", url: "/cars/Volvo mobile wall.html" },
    { name:"mg mobile wallpaper", url:"/cars/MG mobile wall.html"},
  ];
  // If search term is not empty
  if (searchTerm) {
    const matchedCar = carList.find((car) =>
      car.name.toLowerCase().includes(searchTerm)
    );
    if (matchedCar) {
      window.location.href = matchedCar.url;
    } else {
      // Redirect to search error page if no match found
      window.location.href = "/search error.html";
    }
  }
}

// Add event listener for search input
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search_input");
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        searchCars();
      }
    });
  }
});
//image download//
// Load the notifications.js script if it's not already loaded
(function() {
  if (typeof showNotification !== 'function') {
    const script = document.createElement('script');
    script.src = '/notifications.js';
    script.async = true;
    document.head.appendChild(script);
    
    // Fallback in case the script fails to load
    script.onerror = function() {
      console.error('Failed to load notifications.js');
      
      // Define minimal versions of the functions
      window.showNotification = function(options) {
        alert(options.message || 'Notification');
      };
      
      window.isUserLoggedIn = function() {
        return sessionStorage.getItem('user') !== null;
      };
    };
  }
})();

// Function to handle download with authentication check
function downloadBMWImage(imageUrl, fileName) {
  // Check if user is logged in
  if (!isUserLoggedIn()) {
    // If not logged in, show a notification with sound and redirect to login page
    showNotification({
      type: 'warning',
      title: 'Authentication Required',
      message: 'Please login to download images',
      actionText: 'Login now',
      actionCallback: () => {
        // Store the current page URL in session storage to redirect back after login
        sessionStorage.setItem('redirectAfterLogin', window.location.href);
        // Redirect to login page
        navigateWithLoading('/login.html');
      },
      sound: true, // Enable sound
      duration: 7000 // Show for 7 seconds
    });
    
    // Store the current page URL in session storage to redirect back after login
    sessionStorage.setItem('redirectAfterLogin', window.location.href);
    
    // Delay redirect to allow user to see the notification
    setTimeout(() => {
      navigateWithLoading('/login.html');
    }, 3000);
    
    return;
  }
  
  // If logged in, proceed with download
  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Show success notification with sound
  showNotification({
    type: 'success',
    title: 'Download Started',
    message: `Your file "${fileName}" is downloading`,
    sound: true, // Enable sound
    duration: 3000
  });
}

// Usage examples:
const BMWcar1 = () =>downloadBMWImage("/image/BMW dream.webp", "BMW1SH5567.jpg");
const BMWcar2 = () => downloadBMWImage("/image/BMW1.jpg", "BMW122SH3758.jpg");
const BMWcar3 = () => downloadBMWImage("/image/BMWs5.jpg", "BMW122SH3705.jpg");
const BMWcar4 = () =>downloadBMWImage("/image/BMW retro.jpg", "BMW12SH375307.jpg");
const BMWcar5 = () => downloadBMWImage("/image/BMWs3.jpg", "BMW122SH3756.jpg");
const BMWcar6 = () => downloadBMWImage("/image/BMWs1.jpg", "BMW122SH6758.jpg");
const BMWcar7 = () => downloadBMWImage("/image/BMW i5.jpg", "BMW122SH3858.jpg");
const BMWcar8 = () =>downloadBMWImage("/image/Bmw E30.jpg", "BMW152SH3758.jpg");
const BMWcar9 = () => downloadBMWImage("/image/BMW M3.jpg", "BMW122SH6858.jpg");
const BMWcar10 = () => downloadBMWImage("/image/BMWw.jpg", "BMW122SH3658.jpg");
const BMWcar11 = () => downloadBMWImage("/image/BMWc1.jpg", "BMW122SH5758.jpg");
const BMWcar12 = () =>downloadBMWImage("/image/BMWc2.jpg", "BMW122SH36788.jpg");
const BMWcar13 = () =>downloadBMWImage("/image/BMWc3.jpg", "BMW122SH76758.jpg");
const BMWcar14 = () => downloadBMWImage("/image/BMWs4.jpg", "BMW122SH6558.jpg");
const BMWcar15 = () =>downloadBMWImage("/image/BMWs2.jpg", "BMW122SH75758.jpg");
const BMWcar16 = () => downloadBMWImage("/image/338363.jpg", "338363.jpg");
const BMWcar17 = () => downloadBMWImage("/image/110986.webp", "110986.jpg");
const BMWcar18 = () => downloadBMWImage("/image/338475.webp", "338475.jpg");
const BMWcar19 = () => downloadBMWImage("/image/827062.webp", "827062.jpg");
const BMWcar20 = () => downloadBMWImage("/image/338616.jpg", "338616.jpg");
const BMWcar21 = () => downloadBMWImage("/image/824967.jpg", "824967.jpg");
const BMWcar22 = () => downloadBMWImage("/image/824990.jpg", "824990.jpg");
const BMWcar23 = () => downloadBMWImage("/image/883109.jpg", "883109.jpg");
const BMWcar24 = () => downloadBMWImage("/image/1125033.jpg", "1125033.jpg");
const BMWcar25 = () => downloadBMWImage("/image/1125085.jpg", "1125085.jpg");
const BMWcar26 = () => downloadBMWImage("/image/1152669.webp", "1152669.jpg");
const BMWcar27 = () => downloadBMWImage("/image/1209625.jpg", "1209625.jpg");
const BMWcar28 = () => downloadBMWImage("/image/1287841.webp", "1287841.jpg");
const BMWcar29 = () => downloadBMWImage("/image/1600717.jpg", "1600717.jpg");
const BMWcar30 = () => downloadBMWImage("/image/1680920.jpg", "1680920.jpg");
const BMWcar31 = () => downloadBMWImage("/image/2061317.jpg", "2061317.jpg");
const BMWcar32 = () => downloadBMWImage("/image/2789986.jpg", "2789986.jpg");
const BMWcar33 = () => downloadBMWImage("/image/3804178.webp", "3804178.jpg");
const BMWcar34 = () => downloadBMWImage("/image/7640137.jpg", "7640137.jpg");
const BMWcar35 = () => downloadBMWImage("/image/2802011.webp", "2802011.jpg");

function openChat() {
    navigateWithLoading('/Chatbot.html');
}

function previewWallpaper(imgSrc) {
    // Create a div for the preview
    const preview = document.createElement('div');
    preview.style.position = 'fixed';
    preview.style.top = '0';
    preview.style.left = '0';
    preview.style.width = '100%';
    preview.style.height = '100%';
    preview.style.backgroundColor = 'rgba(0,0,0,0.9)';
    preview.style.zIndex = '1000';
    preview.style.display = 'flex';
    preview.style.justifyContent = 'center';
    preview.style.alignItems = 'center';

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '✕';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.background = 'transparent';
    closeButton.style.border = 'none';
    closeButton.style.color = 'white';
    closeButton.style.fontSize = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.padding = '10px';
    closeButton.style.zIndex = '1001';

    // Add hover effect
    closeButton.onmouseover = function() {
        closeButton.style.transform = 'scale(1.2)';
        closeButton.style.transition = 'transform 0.2s';
    };
    closeButton.onmouseout = function() {
        closeButton.style.transform = 'scale(1)';
    };

    // Create the image
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.maxWidth = '95%';
    img.style.maxHeight = '95%';
    img.style.objectFit = 'contain';

    // Add close functionality
    const closePreview = () => {
        document.body.removeChild(preview);
    };
    closeButton.onclick = closePreview;
    preview.onclick = function(e) {
        if (e.target === preview) {
            closePreview();
        }
    };

    // Add image and close button to preview div
    preview.appendChild(closeButton);
    preview.appendChild(img);

    // Add preview to body
    document.body.appendChild(preview);
}
