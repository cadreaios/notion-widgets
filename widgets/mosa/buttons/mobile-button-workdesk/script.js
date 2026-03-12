(function () {
  const params = new URLSearchParams(window.location.search);

  const defaults = {
    mobileUrl: "#",
    buttonLabel: "Open Mobile Desk",
    accent: "#3B82F6"
  };

  const button = document.getElementById("mobileDeskButton");
  const label = document.getElementById("mobileDeskButtonLabel");
  if (!button || !label) return;

  const mobileUrl = params.get("mobileUrl") || defaults.mobileUrl;
  const buttonLabel = params.get("buttonLabel") || defaults.buttonLabel;
  const accentInput = params.get("accent") || defaults.accent;
  const isHexColor = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(accentInput);
  const accent = isHexColor ? accentInput : defaults.accent;

  button.setAttribute("href", mobileUrl);
  button.setAttribute("aria-label", buttonLabel);
  label.textContent = buttonLabel;
  document.documentElement.style.setProperty("--accent-color", accent);
})();
