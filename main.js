// Secondary Nav
$("#pG1, #pG2, #pG3, #pG4, #pG5, #pG6").on("click", addElements);
$(".back").on("click", reset);
$(document).on("click", ".single", select);

function addElements(e) {

  $(".dynamic").children("a").remove();

  var page = e.currentTarget.id;
  var pageGroups = {
    pG1: ["Brand Keywords", "Customer Support", "Instagram Only", "Pumpkin Spice Love"]
  };

  pageGroups[page].map((i) => {
    $(".dynamic").append("<a href='#' class='list-item single'>" + i + "</a>");
  });

  slide();
}

function slide() {
  $(".nav-list").removeClass("reset");
  $(".nav-list").addClass("slide");
}

function reset() {
  $(".nav-list").removeClass("slide");
  $(".nav-list").addClass("reset");
}

function select(e) {
  if($(e.currentTarget).hasClass("active-list")) {

  } else {
    $(".single").removeClass("active-list");
    $(e.currentTarget).addClass("active-list");
  }
}

// Left Pannel
// There has to be a better way to do this
$(".open-pannel, .pannel-close").on("click",function(){
  $('.left-pannel').toggleClass("pannel-reset");
});
$(".content, .filters").on("click",function(){
  $('.left-pannel').addClass("pannel-reset");
});
$(".workspace").on("click",function(){
  $("#workspace-select").show();
});
$(".search-launch").on("click",function(){
  $("#search").show();
});
$(".notifications-launch").on("click",function(){
  $("#notifications").show();
});
$(".compose-launch").on("click",function(){
  $("#compose").show();
});
$(".pannel-close, .content, .filters").on("click",function(){
  $("#workspace-select, #search, #notifications, #compose").hide();
});

// Main Nav Tooltips
$('.main-nav .workspace, .main-nav a, .main-nav .action').hover(function(){
    $('.tooltip', this).css("display", "block");
    }, function(){
    $('.tooltip', this).css("display", "none");
});

// Open / Close Filter Groups
$(".options-header").on("click",function(){
  $(this).next().toggle();
  $('.carrot', this).toggleClass("rotate-half");
});


// Filters
var filters = $("#filters");

$("#filtersBtn").on("click", openCloseFil);

function openCloseFil() {
  if(filters.hasClass("filters-open")) {
    filters.removeClass("filters-open");
    $("#shareBtn").html("");
    enterPoo();
    $(".filter-title, .options, .links-full").addClass("hidden");
  } else {
    $("#filters").addClass("filters-open"); 
    $("#shareBtn").html("&nbsp;&nbsp;&nbsp;Share");
    $("#poo").addClass("hidden");
    $(".filter-title, .options, .links-full").removeClass("hidden");
  }
}

function enterPoo() {
  setTimeout(
    function() {
      $("#poo").removeClass("hidden");
    }, 150
  );
}