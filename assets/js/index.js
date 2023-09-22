if (!window.jQuery)
  throw new Error("jQuery is not loaded");

$(".expander").addClass("closed");
$(".expander").on("click", function() {
  console.log("clicked");
  $(this).toggleClass("closed");
});
