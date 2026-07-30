(function () {
  var menuButton = document.querySelector(".menu-button");
  var mobilePanel = document.querySelector(".mobile-panel");

  if (menuButton && mobilePanel) {
    menuButton.addEventListener("click", function () {
      var open = mobilePanel.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("menu-open", open);
    });

    mobilePanel.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        mobilePanel.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      }
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (item) {
    item.textContent = new Date().getFullYear();
  });

  var contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(contactForm);
      var subject = data.get("subject") || "Website inquiry";
      var body = [
        "Name: " + (data.get("name") || ""),
        "Email: " + (data.get("email") || ""),
        "Phone: " + (data.get("phone") || ""),
        "Interested in: " + (data.get("interest") || ""),
        "",
        data.get("message") || ""
      ].join("\n");
      window.location.href =
        "mailto:martha@letgloryshine.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
    });
  }

  var storyForm = document.querySelector("#story-form");
  if (storyForm) {
    storyForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(storyForm);
      var body = [
        "Name: " + (data.get("name") || ""),
        "Email: " + (data.get("email") || ""),
        "Phone: " + (data.get("phone") || ""),
        "Location: " + (data.get("location") || ""),
        "Website: " + (data.get("website") || ""),
        "Social media: " + (data.get("social") || ""),
        "",
        "SHORT BIO",
        data.get("bio") || "",
        "",
        "STORY TO SHARE",
        data.get("story") || "",
        "",
        "FAITH, HEALING, TRIUMPH, OR TRANSFORMATION",
        data.get("themes") || "",
        "",
        "WHY THIS WILL INSPIRE VIEWERS",
        data.get("impact") || ""
      ].join("\n");
      window.location.href =
        "mailto:martha@letgloryshine.com?subject=" +
        encodeURIComponent("Let Glory Shine guest story: " + (data.get("name") || "")) +
        "&body=" +
        encodeURIComponent(body);
    });
  }
})();
