// Loads i18n.json and swaps text for every element carrying data-i18n.
// Remembers the visitor's chosen language in localStorage.

(async function () {
  const STORAGE_KEY = "luna-lang";
  const DEFAULT_LANG = "en";

  let dict = {};
  try {
    const res = await fetch("i18n.json");
    dict = await res.json();
  } catch (err) {
    console.error("Could not load i18n.json", err);
    return;
  }

  const buttons = document.querySelectorAll(".lang-switch button");

  function applyLang(lang) {
    const strings = dict[lang];
    if (!strings) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (strings[key] !== undefined) {
        el.innerHTML = strings[key];
      }
    });

    document.documentElement.lang = lang;

    buttons.forEach((btn) => {
      btn.setAttribute("aria-current", btn.dataset.lang === lang ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (err) {
      // localStorage may be unavailable (e.g. private browsing) — safe to ignore
    }
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });

  let startLang = DEFAULT_LANG;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && dict[saved]) startLang = saved;
  } catch (err) {
    // ignore
  }

  applyLang(startLang);
})();
