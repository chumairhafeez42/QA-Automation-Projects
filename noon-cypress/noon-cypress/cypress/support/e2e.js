import "./commands";

// noon.com occasionally throws benign third-party JS errors (ads, analytics,
// chat widgets) that would otherwise fail the whole spec. We only ignore
// exceptions that are NOT thrown by our own assertions.
Cypress.on("uncaught:exception", (err) => {
  const ignoredPatterns = [
    "ResizeObserver loop",
    "Non-Error promise rejection",
    "gtag",
    "fbq",
    "clarity"
  ];
  if (ignoredPatterns.some((p) => err.message && err.message.includes(p))) {
    return false;
  }
  return true;
});
