document.addEventListener('DOMContentLoaded', function() {
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]').on("click", function (e) {
  e.preventDefault();
  const href = $(this).attr("href");
  $("html, body").animate({ scrollTop: $(href).offset().top }, 500);
});

}, false);
