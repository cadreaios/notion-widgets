/*
 * Supported URL params:
 * accent, active,
 * workdeskLabel/marketingLabel/creativeLabel/socialLabel/brandLabel/mobileLabel,
 * workdeskUrl/marketingUrl/creativeUrl/socialUrl/brandUrl/mobileUrl
 */
(function () {
  const params = new URLSearchParams(window.location.search);

  const defaults = {
    accent: "#3B82F6",
    active: "workdesk",
    labels: {
      workdesk: "Work Desk",
      marketing: "Marketing Studio",
      creative: "Creative Studio",
      social: "Social Studio",
      brand: "Brand Studio",
      mobile: "Open Mobile Desk"
    },
    urls: {
      workdesk: "#",
      marketing: "#",
      creative: "#",
      social: "#",
      brand: "#",
      mobile: "#"
    }
  };

  const actions = ["workdesk", "marketing", "creative", "social", "brand", "mobile"];
  const actionLinks = document.querySelectorAll(".studio-action[data-action]");

  const accentInput = params.get("accent") || defaults.accent;
  const isHexColor = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(accentInput);
  const accent = isHexColor ? accentInput : defaults.accent;
  document.documentElement.style.setProperty("--accent-color", accent);

  actionLinks.forEach((link) => {
    const action = link.dataset.action;
    if (!action || !actions.includes(action)) return;

    const label = params.get(`${action}Label`) || defaults.labels[action];
    const url = params.get(`${action}Url`) || defaults.urls[action];

    const labelNode = link.querySelector("span");
    if (labelNode) labelNode.textContent = label;

    link.setAttribute("href", url);
    link.setAttribute("aria-label", label);
  });

  const activeParam = (params.get("active") || defaults.active).toLowerCase();
  const activeAction = actions.includes(activeParam) ? activeParam : defaults.active;

  actionLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.action === activeAction);
  });
})();
