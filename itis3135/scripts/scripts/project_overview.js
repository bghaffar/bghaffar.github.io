// project_overview.js

$(document).ready(function () {
    // Show/hide site map image using jQuery UI toggle effect
    $("#toggle-sitemap").click(function () {
      $("#sitemap-image").toggle("fold", {}, 500);
    });
  
    // Show/hide wireframe image
    $("#toggle-wireframe").click(function () {
      $("#wireframe-image").toggle("slide", {}, 500);
    });
  
    // Tooltip for client email and phone
    $(document).tooltip();
  
    // AJAX placeholder simulation
    $("#ajax-btn").click(function () {
      $("#ajax-result").html("Loading...");
      setTimeout(function () {
        $("#ajax-result").html(
          "<strong>AJAX loaded successfully!</strong> (simulated response)"
        );
      }, 1000);
    });
  
    // Footer year injection
    const year = new Date().getFullYear();
    $("#year").text(year);
  });
  