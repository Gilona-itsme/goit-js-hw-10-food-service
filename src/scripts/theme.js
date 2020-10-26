import '../sass/styles.scss';

// Theme change 

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

export const body = document.querySelector('body');
export const themeToggle = document.querySelector('.theme-switch__toggle');

 export function setTheme (event)  {
  if (event.target.checked) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
};

 export  const setDarkTheme =  () => {
   body.classList.remove(Theme.LIGHT);
  localStorage.setItem('theme', Theme.DARK);
    body.classList.add(Theme.DARK);
    
};

 export const setLightTheme =  () => {
  localStorage.setItem('theme', Theme.LIGHT);
  body.classList.remove(Theme.DARK);
  body.classList.add(Theme.LIGHT);
};

function localStorageChange() {
  if (localStorage.getItem('theme')) {
    body.classList.add(localStorage.getItem('theme'));
  }
  if (localStorage.getItem('theme') === Theme.DARK) {
    themeToggle.checked = true;
  } else {
    ('');
  }
}

 localStorageChange(); 
themeToggle.addEventListener('change', setTheme);

