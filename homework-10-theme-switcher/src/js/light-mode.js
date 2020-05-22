
const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
    };

  const refs = {
    switcher: document.querySelector('.js-switch-input'),
    body: document.querySelector('body'),
    };
  
    refs.switcher.addEventListener('change', changingTheme)
  
    function chekedTheme() {
      if (localStorage.getItem('theme') === theme.DARK) {
        refs.switcher.checked = true;
        refs.body.classList.add(theme.DARK);
      }
    };
  
    function changingTheme() {
      if(refs.switcher.checked) {
        refs.body.classList.add(theme.DARK);
        refs.body.classList.remove(theme.LIGHT);
        localStorage.setItem('theme', theme.DARK);
      } else {
        refs.body.classList.add(theme.LIGHT);
        refs.body.classList.remove(theme.DARK);
        localStorage.setItem('theme', theme.LIGHT);
      }
    };
  
    chekedTheme()
   
  
     
  
  
    