window.NotionWidgetUtils?.ready(() => {
  const dateTimeEl = document.getElementById("deskHeaderDateTime");
  if (!dateTimeEl) return;

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });

  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });

  const updateDateTime = () => {
    const now = new Date();
    dateTimeEl.textContent = `${dateFormatter.format(now)} • ${timeFormatter.format(now)}`;
  };

  updateDateTime();
  window.setInterval(updateDateTime, 30000);
});
