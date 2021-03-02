/** mobile menu **/
$(document).ready(function () {
  $("#openmenubar").click(function () {
    $("#header-mobile-menubar").addClass("open");
    $("body").addClass("menuopen");
  });
  $("#closemenubar").click(function () {
    $("#header-mobile-menubar").removeClass("open");
    $("body").removeClass("menuopen");
  });
});

