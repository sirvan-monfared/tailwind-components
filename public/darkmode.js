// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  // Whenever the user explicitly chooses light mode
  localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'
  
  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')





const themeSwitcherElm = document.getElementById('themeSwitcher');

themeSwitcherElm.addEventListener('change', (e) => {
    const value = e.target.value;

    switch(value) {
        case 'light':
            localStorage.theme = "light";
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        break;
        case 'dark':
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        break;
    }
})
