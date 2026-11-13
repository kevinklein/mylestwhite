window.addEventListener("scroll", function () {
  if (window.scrollY > 750) {
    document.body.classList.add("is-scrolled");
  } else {
    document.body.classList.remove("is-scrolled");
  }
});

document.querySelectorAll(".review-expandable").forEach(function (review) {
  var body = review.querySelector(".review-body");
  var toggle = review.querySelector(".review-toggle");
  if (!body || !toggle) return;

  if (body.scrollHeight <= 325) {
    toggle.hidden = true;
    return;
  }

  toggle.addEventListener("click", function () {
    var expanded = review.classList.toggle("is-expanded");
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    toggle.textContent = expanded ? "View less" : "View more";
  });
});
