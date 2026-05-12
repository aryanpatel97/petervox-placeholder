$(document).ready(function () {
  // Open the first child by default
  $(".help-advice-header")
    .first()
    .addClass("active")
    .next(".help-advice-content")
    .slideDown();

  // Handle click events for closet headers
  $(".help-advice-header").click(function () {
    $(this).toggleClass("active").next(".help-advice-content").slideToggle();
    $(".help-advice-header")
      .not(this)
      .removeClass("active")
      .next(".help-advice-content")
      .slideUp();
  });
});
