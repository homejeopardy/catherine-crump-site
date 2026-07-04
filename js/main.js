/* Mobile nav toggle */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => links.classList.remove("open"))
    );
  }
});

/* Land on in-page anchors correctly after load (accounts for the sticky
   header via CSS scroll-margin, plus any late font/layout shifts). */
window.addEventListener("load", () => {
  const id = location.hash.slice(1);
  if (!id) return;
  const el = document.getElementById(id);
  if (el) setTimeout(() => el.scrollIntoView(), 80);
});

/* Feedback form → opens the visitor's email client to the beta feedback address. */
(function () {
  var f = document.getElementById("feedback-form");
  if (!f) return;
  f.addEventListener("submit", function (e) {
    e.preventDefault();
    var msg = (f.message.value || "").trim();
    if (!msg) return;
    var email = (f.email.value || "").trim();
    var body = msg + (email ? "\n\n— from: " + email : "");
    window.location.href =
      "mailto:feedback@beta.catherine-crump.com" +
      "?subject=" + encodeURIComponent("Site feedback (beta)") +
      "&body=" + encodeURIComponent(body);
    f.innerHTML = '<p class="feedback-done">Thanks! Your email app should be opening — hit send and it\'s on its way.</p>';
  });
})();
