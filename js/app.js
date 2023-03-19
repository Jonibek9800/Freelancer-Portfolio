const btnDarkMode = document.querySelector(".dark-mode-btn");
const body = document.querySelector("body");


// Проверка темной темы на уровне системных настроек

if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    body.classList.add("dark");
  }

// Проверка на темную тему
const locaDarklItem = localStorage.getItem("darkMode");
if (locaDarklItem === "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  body.classList.add("dark");
} else if (locaDarklItem === "light") {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  body.classList.remove("dark");
}



// Если меняются системные настройки то меняем тему
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "";
    if (newColorScheme === "dark") {
      btnDarkMode.classList.add("dark-mode-btn--active");
      body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      btnDarkMode.classList.remove("dark-mode-btn--active");
      body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  });

// Переключение темной темы
btnDarkMode.addEventListener("click", () => {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
});
