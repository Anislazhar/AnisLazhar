var typed = new Typed("#typed", {
  strings: ["Anis Lazhar", "CV / Resume"],

  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

$(document).ready(function () {
  $("#profile__ripple").ripples({
    resolution: 512,
    drpRadius: 10,
  });

  const bars = document.querySelectorAll(".progress__bar");

  bars.forEach(function (bar) {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";
    console.log(percentage);
  });

  var $wrapper = $(".portfolio__wrapper");

  $wrapper.isotope({
    filter: "*",
    layoutMode: "masonry",
    animationOption: {
      duration: 750,
      easing: "linear",
    },
  });

  let links = document.querySelectorAll(".tabs a");
  links.forEach((link) => {
    let selector = link.dataset.filter;
    link.addEventListener("click", function (e) {
      e.preventDefault();

      $wrapper.isotope({
        filter: selector,
        layoutMode: "masonry",
        animationOption: {
          duration: 750,
          easing: "linear",
        },
      });

      links.forEach((link) => {
        link.classList.remove("active");
      });
      e.target.classList.add("active");
    });
  });

  $(".magnify").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
    zoom: {
      enable: true,
    },
  });

  //Slider

  $(".slider").slick({
    arrows: false,
    autoplay: true,
  });
});
