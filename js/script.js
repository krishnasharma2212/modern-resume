let isGood = true;

let lastEl = document.getElementById ('menu-home');

const card_home = document.getElementById ('card-home');
const card_projects = document.getElementById ('card-works');
const card_resume = document.getElementById ('card-resume');
const card_contact = document.getElementById ('card-contact');

let lastEL2 = card_home;

const animate = element => {
  element.classList.add ('animated');
  element.classList.add ('active');

  element.classList.remove ('fadeOutUp');

  element.classList.remove ('hidden');
  element.classList.add ('fadeInUp');

  lastEL2 = element;
};

const rmv = element => {
  element.className = '';

  element.classList.add ('card-inner');
};

const change = element => {
  element.classList.add ('current-menu-item');

  lastEl.classList.remove ('current-menu-item');

  lastEl = element;

  if (isGood) {
    const Tab = element.innerText;

    lastEL2.classList.add ('hidden');
    lastEL2.classList.add ('fadeOutUp');

    if (Tab == 'ABOUT') {
      animate (card_home);

      return;
    }
    if (Tab == 'CONTACT') {
      animate (card_contact);

      return;
    }
    if (Tab == 'RESUME') {
      animate (card_resume);

      return;
    }
    if (Tab == 'PROJECTS') {
      animate (card_projects);

      return;
    }
  }
};
let counter = 0;
let counter2 = 100;
const phrases = [
  'Fullstack Developer',
  'Data Scraper',
  'Data Anylysis',
  'Fix Errors and Bugs',
  'Automation',
];
let currentPhraseIndex = 0, currentCharIndex = 0, direction = 1;
function typeWriter () {
  let e = phrases[currentPhraseIndex], r = document.getElementById ('writer');
  1 === direction
    ? currentCharIndex <= e.length
        ? ((r.textContent = e.substring (0, currentCharIndex++)), setTimeout (
            typeWriter,
            100
          ))
        : ((direction = -1), setTimeout (typeWriter, 1e3))
    : currentCharIndex >= 0
        ? ((r.textContent = e.substring (0, currentCharIndex--)), setTimeout (
            typeWriter,
            50
          ))
        : ((direction = 1), (currentPhraseIndex =
            (currentPhraseIndex + 1) % phrases.length), setTimeout (
            typeWriter,
            1e3
          ));
}
typeWriter ();

// Define a function to be executed when the hash tag changes
function handleHashChange () {
  const newHash = window.location.hash.substring (1); // Remove the '#' character

  if (isGood) {
    if (newHash == 'home') {
      return;
    }

    change (document.getElementById (`menu-${newHash}`));
    return;
  }
  // Get the new hash tag from the URL

  // Run your desired function with the new hash tag
  console.log ('Hash tag changed to:', newHash);

  const element = document.getElementById (`card-${newHash}`);
  element.scrollIntoView ({behavior: 'smooth'});

  // Call your function here, passing the new hash tag as a parameter if needed
  // yourFunction(newHash);
}

// Add an event listener for the 'hashchange' event
window.addEventListener ('hashchange', handleHashChange);

handleHashChange ();

// Define a function to be executed when the window width changes
function handleWindowSizeChange () {
  // Get the current window width
  const windowWidth = window.innerWidth;

  if (windowWidth < 1120) {
    isGood = false;
    handleHashChange ();
    rmv (card_home);
    rmv (card_contact);
    rmv (card_resume);
    rmv (card_projects);

    // Your code to handle the condition when the window width is less than -1120
    return;
  }
  handleHashChange ();

  isGood = true;
}

// Add an event listener for the 'resize' event
window.addEventListener ('resize', handleWindowSizeChange);

// Call the function initially to handle the initial window width
handleWindowSizeChange ();


