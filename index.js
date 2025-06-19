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
    { name: "saab mobile wallpaper", url: "/cars/Saab mobile wall.html" },
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

// Handle the left navigation button (❮)
function prevpage() {
  window.location.href="index.html";
}
// Handle the right navigation button (❯)
function nextpage() {
  window.location.href = "index2.html";
}

// Check user session and update UI
function checkUserSession() {
  const userSession = JSON.parse(sessionStorage.getItem('user'));
  const loginButton = document.querySelector('.user-profile');
  
  if (userSession) {
    // User is logged in, update button
    loginButton.innerHTML = `
      <div class="user-profile-inner">
        ${userSession.picture ? 
          `<img src="${userSession.picture}" alt="Profile" style="width: 24px; height: 24px; border-radius: 50%;">` : 
          '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231z"></path></g></svg>'
        }
        <p>${userSession.name || userSession.email}</p>
      </div>
    `;
    loginButton.onclick = showProfileMenu;
  } else {
    // User is not logged in, show login button
    loginButton.innerHTML = `
      <div class="user-profile-inner">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g data-name="Layer 2" id="Layer_2">
            <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231z"></path>
          </g>
        </svg>
        <p>Log In</p>
      </div>
    `;
    loginButton.onclick = login;
  }
}

// Show profile menu
function showProfileMenu(event) {
  event.stopPropagation();
  
  // Remove any existing menu
  const oldMenu = document.getElementById('profile-menu');
  if (oldMenu) {
    oldMenu.remove();
    return;
  }
  
  const userSession = JSON.parse(sessionStorage.getItem('user'));
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
    const menu = document.createElement('div');
  menu.id = 'profile-menu';
  menu.className = 'profile-menu';
  menu.style.cssText = `
    position: absolute;
    top: ${rect.bottom + 5}px;
    right: ${window.innerWidth - rect.right}px;
  `;
  
  const userInfo = document.createElement('div');
  userInfo.className = 'profile-menu-info';
  
  // Create the avatar element
  const avatar = userSession.picture ? 
    `<img src="${userSession.picture}" alt="Profile" class="profile-menu-avatar">` :
    `<div class="profile-menu-avatar profile-menu-avatar-letter">
      <span>${userSession.name?.[0]?.toUpperCase() || userSession.email[0]?.toUpperCase()}</span>
     </div>`;
  
  // Create user details with name and email
  const userDetails = document.createElement('div');
  userDetails.className = 'profile-menu-user-details';
  userDetails.innerHTML = `
    ${userSession.name ? `<div class="profile-menu-name">${userSession.name}</div>` : ''}
    <div class="profile-menu-email">${userSession.email}</div>
  `;
  
  userInfo.innerHTML = `
    <div class="profile-menu-header">
      ${avatar}
      ${userDetails.outerHTML}
    </div>
  `;
  
  // Create menu items section
  const menuItems = document.createElement('div');
  menuItems.className = 'profile-menu-items';
  
  // Add menu items
  const items = [
    {
      label: 'Your Profile',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/></svg>',
      action: () => { /* Will add profile page navigation later */ }
    },
    {
      label: 'Settings',
      icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" fill="currentColor"/></svg>',
      action: () => { /* Will add settings page navigation later */ }
    }
  ];
  
  items.forEach(item => {
    const menuItem = document.createElement('button');
    menuItem.className = 'profile-menu-item';
    menuItem.innerHTML = `
      <span class="profile-menu-item-icon">${item.icon}</span>
      <span class="profile-menu-item-label">${item.label}</span>
    `;
    menuItem.onclick = item.action;
    menuItems.appendChild(menuItem);
  });
  
  // Create sign out button
  const logoutBtn = document.createElement('button');
  logoutBtn.className = 'profile-menu-item profile-menu-signout';
  logoutBtn.innerHTML = `
    <span class="profile-menu-item-icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" fill="currentColor"/>
      </svg>
    </span>
    <span class="profile-menu-item-label">Sign Out</span>
  `;
  logoutBtn.onclick = logout;
  
  menu.appendChild(userInfo);
  menu.appendChild(logoutBtn);
  document.body.appendChild(menu);
  
  // Close menu when clicking outside
  const closeMenu = (e) => {
    if (!menu.contains(e.target) && e.target !== button) {
      menu.remove();
      document.removeEventListener('click', closeMenu);
    }
  };
  document.addEventListener('click', closeMenu);
}

// Logout function
function logout() {
  sessionStorage.removeItem('user');
  navigateWithLoading('index.html');
}

//login button
function login() {
  navigateWithLoading("login.html");
}

// Check session on page load
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector(".search_input");
  if (searchInput) {
    searchInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        searchCars();
      }
    });
  }
  checkUserSession();
});

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
// Navigation to car pages
const navigateToCar = (car) => (window.location.href = `/cars/${car}.html`);

const BMW = () => navigateToCar("BMW");
const benz = () => navigateToCar("Mercedes Benz");
const Ferrari = () => navigateToCar("Ferrari");
const Lamborghini = () => navigateToCar("Lamborghini");
const Porsche = () => navigateToCar("Porsche");
const Ford = () => navigateToCar("Ford");
const Audi = () => navigateToCar("Audi");
const Dodge = () => navigateToCar("Dodge");
const Toyota = () => navigateToCar("Toyota");
const Jeep = () => navigateToCar("Jeep");
const Jaguar = () => navigateToCar("Jaguar");
const Maserati = () => navigateToCar("Maserati");
const Bentley = () => navigateToCar("Bentley");
const Nissan = () => navigateToCar("Nissan");
const Alfa = () => navigateToCar("Alfa Romeo");
const Honda = () => navigateToCar("Honda");
const Hyundai = () => navigateToCar("Hyundai");
const Subaru = () => navigateToCar("Subaru");
const Chrysler = () => navigateToCar("Chrysler");
const Cadillac = () => navigateToCar("Cadillac");
const Mazda = () => navigateToCar("Mazda");
const Bugatti = () => navigateToCar("Bugatti");
const Lexus = () => navigateToCar("Lexus");
const RR = () => navigateToCar("Rolls Royce");
const Acura = () => navigateToCar("Acura");
const Aston = () => navigateToCar("Aston Martin");
const Chevrolet = () => navigateToCar("Chevrolet");
const Kia = () => navigateToCar("Kia");
const volkswagen = () => navigateToCar("volkswagen");
const Abarth = () => navigateToCar("Abarth");
const Volvo = () => navigateToCar("Volvo");
const Skoda = () => navigateToCar("Skoda");
const mclaren = () => navigateToCar("mclaren");
const GMC = () => navigateToCar("GMC");
const Infiniti = () => navigateToCar("Infiniti");
const Lincoln = () => navigateToCar("Lincoln");
const Pontiac = () => navigateToCar("Pontiac");
const Saab = () => navigateToCar("Saab");
const Genesis = () => navigateToCar("Genesis");
const Suzuki = () => navigateToCar("Suzuki");
const Mitsubishi = () => navigateToCar("Mitsubishi");
const Citroen = () => navigateToCar("Citroen");
const Fiat = () => navigateToCar("Fiat");
const Lancia = () => navigateToCar("Lancia");
const Opel = () => navigateToCar("Opel");
const Lotus = () => navigateToCar("Lotus");
const Mini = () => navigateToCar("Mini");
const KTM = () => navigateToCar("KTM");
const Tesla = () => navigateToCar("Tesla");
const Tata = () => navigateToCar("Tata");
const Force = () => navigateToCar("Force");
const Mahindra = () => navigateToCar("Mahindra");
const Renault = () => navigateToCar("Renault");
const Rover = () => navigateToCar("Land Rover");
const MG = () => navigateToCar("MG");
const Pagani = () => navigateToCar("Pagani");
const Buick = () => navigateToCar("Buick");
const Maybach = () => navigateToCar("Maybach");
const corvette = () => navigateToCar("Chevrolet corvette");
//social-media//

// Helper function to handle page transitions with loading
function navigateWithLoading(url) {
    sessionStorage.setItem('nextPage', url);
    window.location.href = 'loading.html';
}

function youtube() {
    window.open("https://www.youtube.com/channel/UC-t2QPsmo5UWktlYsOMSbYA", "_blank");
}

function email() {
    window.location.href = "mailto:carshubx0@gmail.com";
}
function instagram() {
  window.location.href =
    "https://www.instagram.com/cars_hubx0?igsh=OHltODlnZmVlNTZw";
}
function facebook() {
  const fbURL = {
    "@context": "https://schema.org",
    "@type": "Website",
    url: "https://www.facebook.com/profile.php?id=61576162287553",
    sameAs: ["https://www.facebook.com/profile.php?id=61576162287553"],
  };
  window.location.href = fbURL.url;
}
function telegram() {
  window.location.href = "https://t.me/carshubx";
}
function openChat() {
  navigateWithLoading('Chatbot.html');
}
