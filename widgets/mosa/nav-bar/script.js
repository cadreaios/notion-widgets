/*
 * Supported URL params:
 * accent, active,
 * marketingLabel/creativeLabel/socialLabel/brandLabel,
 * marketingUrl/creativeUrl/socialUrl/brandUrl
 */
(function () {
  const params = new URLSearchParams(window.location.search);

  const defaults = {
    accent: "#3B82F6",
    active: "marketing",
    labels: {
      marketing: "Marketing Studio",
      creative: "Creative Studio",
      social: "Social Studio",
      brand: "Brand Studio"
    },
    urls: {
      marketing: "#",
      creative: "#",
      social: "#",
      brand: "#"
    }
  };

  const tabs = ["marketing", "creative", "social", "brand"];
  const links = document.querySelectorAll(".nav-link[data-tab]");

  const accentInput = params.get("accent") || defaults.accent;
  const isHexColor = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(accentInput);
  const accent = isHexColor ? accentInput : defaults.accent;
  document.documentElement.style.setProperty("--accent-color", accent);

  links.forEach((link) => {
    const tab = link.dataset.tab;
    if (!tab || !tabs.includes(tab)) return;

    const label = params.get(`${tab}Label`) || defaults.labels[tab];
    const url = params.get(`${tab}Url`) || defaults.urls[tab];

    const span = link.querySelector("span");
    if (span) {
      span.textContent = label;
    }

    link.setAttribute("aria-label", label);
    link.setAttribute("href", url);
  });

  const activeTab = (params.get("active") || defaults.active).toLowerCase();
  const safeActive = tabs.includes(activeTab) ? activeTab : defaults.active;

  links.forEach((link) => {
    link.classList.toggle("active", link.dataset.tab === safeActive);
  });
})();
