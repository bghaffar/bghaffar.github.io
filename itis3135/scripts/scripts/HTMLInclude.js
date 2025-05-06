// Function to load HTML content from a file and insert it into the DOM
function loadHTMLFile(file, elementId) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => {
        console.error('Error loading HTML file:', error);
      });
  }
  
  // Load the header and footer dynamically
  document.addEventListener("DOMContentLoaded", function() {
    loadHTMLFile('components/header.html', 'header-placeholder');
    loadHTMLFile('components/footer.html', 'footer-placeholder');
  });
  