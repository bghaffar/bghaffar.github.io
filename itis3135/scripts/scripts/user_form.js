document.getElementById("fitnessForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Grab values
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const level = document.getElementById("level").value;
    const muscle = document.getElementById("muscle").value;
    const comments = document.getElementById("comments").value.trim();
  
    // Basic validation
    if (!name || !age || !level || !muscle || isNaN(age)) {
      alert("Please fill out all required fields correctly.");
      return;
    }
  
    // Display summary
    document.getElementById("summaryName").textContent = name;
    document.getElementById("summaryAge").textContent = age;
    document.getElementById("summaryLevel").textContent = level;
    document.getElementById("summaryMuscle").textContent = muscle;
    document.getElementById("summaryComments").textContent = comments || "None";
  
    document.getElementById("formSummary").classList.remove("hidden");
  
    // Optionally store in localStorage
    localStorage.setItem("fitnessProfile", JSON.stringify({ name, age, level, muscle, comments }));
  });
  