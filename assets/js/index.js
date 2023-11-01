if (!window.jQuery)
  throw new Error("jQuery is not loaded");

$(".expander").addClass("closed");
$(".expander").on("click", function() {
  $(this).toggleClass("closed");
});

$(".hv-chsrc").on("mouseover", function() {
  let el = $(this);
  let tmp = el.attr("src");
  el.attr("src", el.attr("hover-src"));
  el.attr("hover-src", tmp);
});
$(".hv-chsrc").on("mouseout", function() {
  let el = $(this);
  let tmp = el.attr("src");
  el.attr("src", el.attr("hover-src"));
  el.attr("hover-src", tmp);
});

// Projects showcase pagination
const perPage = 5;
const projects = $("#projects-list").children();
const numPages = Math.ceil(projects.length / perPage);
var curPage = 0;

function projectsNext() {
  curPage = (curPage + 1) % numPages;
  projectsUpdate();
}
function projectsPrev() {
  curPage = (numPages + curPage - 1) % numPages;
  projectsUpdate();
}
function projectsUpdate() {
  $("#cur-page").text(curPage + 1);
  projects.hide();
  projects.slice(curPage * perPage, (curPage + 1) * perPage).show();
}

$("#total-pages").text(numPages);
projectsUpdate();

// TODO: Avoid jumping vertically when navigating to a page with less items
