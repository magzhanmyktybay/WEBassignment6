$(document).ready(function () {

  console.log("jQuery is ready!");

  $("#headline").text("Future Software Engineer");

  $("#greeting").html("Hello, I'm <b>Magzhan</b>! Nice to see you here &#x1F44B;");

  $("h2").css("color", "#2b6cb0");

  $(".intro").css({
    "font-size": "17px",
    "line-height": "1.6"
  });

  $("#darkBtn").click(function () {
    $("body").css({ "background-color": "#1a1a2e", "color": "#eaeaea" });
    $(".card").css({ "background-color": "#16213e", "border-color": "#0f3460" });
    $("h2").css("color", "#63b3ed");
  });

  $("#lightBtn").click(function () {
    $("body").css({ "background-color": "#f4f6f8", "color": "#222" });
    $(".card").css({ "background-color": "#ffffff", "border-color": "#dde3ea" });
    $("h2").css("color", "#2b6cb0");
  });

  $("#hideBtn").click(function () {
    $("#status, #funFacts").hide("slow");
  });

  $("#showBtn").click(function () {
    $("#status, #funFacts").show("slow");
  });

  $("#toggleBtn").click(function () {
    $("#status, #funFacts").toggle("slow");
  });

  $("#fadeInBtn").click(function () {
    $(".photo").fadeIn(800);
  });

  $("#fadeOutBtn").click(function () {
    $(".photo").fadeOut(800);
  });

  $("#fadeToggleBtn").click(function () {
    $(".photo").fadeToggle(800);
  });

});
