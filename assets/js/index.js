if (!window.jQuery)
  throw new Error("jQuery is not loaded");

let exp = $(".expander"); // TODO: avoid closing animation on page load
exp.each(function() {
  let h = $(this).get(0).offsetHeight;
  h = h / parseFloat($(this).css("font-size"));
  $(this).css("--max-height", h + "em");
});
exp.attr("tabindex", 0);
exp.attr("role", "button");
exp.addClass("closed");
exp.on({
  mousedown: function(e) {
    e.preventDefault();
    $(this).toggleClass("closed");
  },
  focus: function() { $(this).removeClass("closed") },
  blur: function() { $(this).addClass("closed") }
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

$(document).ready(function() {
  $(".keep-height").each(function() {
    $(this).height($(this).height());
  });
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
