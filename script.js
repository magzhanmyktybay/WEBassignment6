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

  $(".panel-heading").click(function () {
    $(this).next(".panel").slideToggle(400);
  });

  $("#slideDownBtn").click(function () {
    $(".panel").slideDown(400);
  });

  $("#slideUpBtn").click(function () {
    $(".panel").slideUp(400);
  });

  function getSkill() {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      $("#skillMsg").text("Please enter a skill.");
      return null;
    }
    $("#skillMsg").text("");
    return skill;
  }

  $("#addSkillBtn").click(function () {
    var skill = getSkill();
    if (skill) {
      $("#skillsList").append("<li>" + skill + "</li>");
      $("#skillInput").val("");
    }
  });

  $("#prependSkillBtn").click(function () {
    var skill = getSkill();
    if (skill) {
      $("#skillsList").prepend("<li>" + skill + "</li>");
      $("#skillInput").val("");
    }
  });

  $("#removeSkillBtn").click(function () {
    var skill = getSkill();
    if (skill) {
      var found = $("#skillsList li").filter(function () {
        return $(this).text().toLowerCase() === skill.toLowerCase();
      });

      if (found.length > 0) {
        found.remove();
        $("#skillInput").val("");
      } else {
        $("#skillMsg").text("Skill \"" + skill + "\" not found.");
      }
    }
  });

  var githubUrl = "https://github.com/magzhanmyktybay";
  var telegramUrl = "https://t.me/kyonoky";

  $("#changeLinkBtn").click(function () {
    if ($("#socialLink").attr("href") === githubUrl) {
      $("#socialLink").attr("href", telegramUrl).text("Telegram");
      $(this).text("Switch to GitHub");
    } else {
      $("#socialLink").attr("href", githubUrl).text("GitHub");
      $(this).text("Switch to Telegram");
    }
    $("#linkInfo").text("Current link: " + $("#socialLink").attr("href"));
  });

  $("#nameInput").on("input", function () {
    $("#namePreview").text($(this).val());
  });

  $("#emailInput").on("input", function () {
    $("#emailPreview").text($(this).val());
  });

  var skillsShown = false;

  $("#animateBtn").click(function () {
    if (!skillsShown) {
      $(".fill").each(function () {
        var level = $(this).attr("data-level");
        $(this).stop().animate({ width: level + "%" }, 1000);
      });
      $(this).text("Reset Skills");
    } else {
      $(".fill").stop().animate({ width: "0%" }, 1000);
      $(this).text("Animate My Skills");
    }
    skillsShown = !skillsShown;
  });

});
