$(document).ready(() => {
  $(".physics").hover(() => {
    $("body").css("background", "#7a6e6f");
    $(".physics").css("color", "#ffffff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".physics").css("color", "#7a6e6f");
    $("h1").css("color", "#000000");
  });

  $(".math").hover(() => {
    $("body").css("background", "#2e7ad1");
    $(".math").css("color", "#fff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".math").css("color", "#2e7ad1");
    $("h1").css("color", "#000000");
  });

  $(".coding").hover(() => {
    $("body").css("background", "#1FDA9A");
    $(".coding").css("color", "#fff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".coding").css("color", "#1FDA9A");
    $("h1").css("color", "#000000");
  });

  $(".music").hover(() => {
    $("body").css("background", "#e03923");
    $(".music").css("color", "#fff");
    $("h1").css("color", "#ffffff");
  }, () => {
    $("body").css("background", "#ffffff");
    $(".music").css("color", "#e03923");
    $("h1").css("color", "#000000");
  });
});