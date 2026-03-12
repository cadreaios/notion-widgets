/**
 * Shared helper utilities for widgets.
 */
(function () {
  window.NotionWidgetUtils = {
    ready(callback) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", callback, { once: true });
      } else {
        callback();
      }
    }
  };
})();
