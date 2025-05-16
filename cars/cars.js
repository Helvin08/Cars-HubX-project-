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
  //BMW button//
  function BMW() {
    window.location.href ="https://www.bmw.com/en/index.html"; 
  }
  function game(){
    window.location.href = "BMW animation.html";
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