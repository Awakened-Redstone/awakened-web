document.addEventListener("DOMContentLoaded", function () {
  OverlayScrollbars(document.querySelectorAll("body"), {
    className: "os-theme-dark os-theme-main",
    overflowBehavior: { x: "hidden" },
    scrollbars: { clickScrolling: true },
    nativeScrollbarsOverlaid: { initialize: false },
  });
  
  kofiWidgetOverlay.draw("awakenedredstone", {
    type: "floating-chat",
    "floating-chat.donateButton.text": "Support me",
    "floating-chat.donateButton.background-color": "#323842",
    "floating-chat.donateButton.text-color": "#fff",
  });
});
