document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("introForm");
    form.addEventListener("submit", handleSubmit);
    form.addEventListener("reset", handleReset);
});

function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mascot = document.getElementById("mascot").value.trim();
    const image = document.getElementById("image").files[0];
    const caption = document.getElementById("caption").value.trim();
    const personal = document.getElementById("personal").value.trim();
    const professional = document.getElementById("professional").value.trim();
    const academic = document.getElementById("academic").value.trim();
    const webdev = document.getElementById("webdev").value.trim();
    const platform = document.getElementById("platform").value.trim();
    const funny = document.getElementById("funny").value.trim();
    const anything = document.getElementById("anything").value.trim();
    const agree = document.getElementById("agree").checked;

    if (!name || !mascot || !image || !caption || !personal || !professional || !academic || !webdev || !platform || !agree) {
        alert("Please fill out all required fields and agree to the terms.");
        return;
    }

    const courses = Array.from(document.getElementsByClassName("courseInput")).map(input => input.value.trim()).filter(Boolean);

    const reader = new FileReader();
    reader.onload = function (e) {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
            <h2>${name}'s Introduction</h2>
            <h3>Mascot: ${mascot}</h3>
            <img src="${e.target.result}" alt="${caption}" style="max-width:200px;"><br>
            <em>${caption}</em><br>
            <p><strong>Personal Background:</strong> ${personal}</p>
            <p><strong>Professional Background:</strong> ${professional}</p>
            <p><strong>Academic Background:</strong> ${academic}</p>
            <p><strong>Background in Web Development:</strong> ${webdev}</p>
            <p><strong>Primary Computer Platform:</strong> ${platform}</p>
            <p><strong>Courses Currently Taking:</strong><ul>${courses.map(c => `<li>${c}</li>`).join('')}</ul></p>
            ${funny ? `<p><strong>Funny Thing:</strong> ${funny}</p>` : ''}
            ${anything ? `<p><strong>Anything Else:</strong> ${anything}</p>` : ''}
            <button onclick="resetPage()">Start Over</button>
        `;
        document.getElementById("introForm").style.display = "none";
        resultDiv.style.display = "block";
    };
    reader.readAsDataURL(image);
}

function handleReset() {
    document.getElementById("coursesContainer").innerHTML = `<input type="text" name="course" class="courseInput">`;
}

function addCourse() {
    const container = document.getElementById("coursesContainer");
    const input = document.createElement("input");
    input.type = "text";
    input.name = "course";
    input.className = "courseInput";
    container.appendChild(input);
}

function removeCourse() {
    const container = document.getElementById("coursesContainer");
    const inputs = container.getElementsByClassName("courseInput");
    if (inputs.length > 1) {
        container.removeChild(inputs[inputs.length - 1]);
    }
}

function resetPage() {
    document.getElementById("introForm").reset();
    handleReset();
    document.getElementById("result").style.display = "none";
    document.getElementById("introForm").style.display = "block";
}
