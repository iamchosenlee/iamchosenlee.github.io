(function trackCvDownloads() {
  const cvButton = document.getElementById("cv-download-button");

  if (!cvButton) {
    return;
  }

  cvButton.addEventListener("click", function () {
    if (typeof window.gtag === "function") {
      window.gtag("event", "cv_download_click", {
        event_category: "engagement",
        event_label: "View / Download CV",
      });
    }
  });
})();
