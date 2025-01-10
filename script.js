let experienceCount = 0;
let projectCount = 0;
let educationCount = 0;

// Add Experience
function addExperience() {
  experienceCount++;
  const experienceDiv = document.getElementById("experienceInputs");
  const inputHtml = `
    <div id="experience-${experienceCount}" class="experience">
      <input type="text" placeholder="Job Title" class="experience-title">
      <input type="text" placeholder="Company Name" class="experience-company">
      <input type="text" placeholder="Dates" class="experience-dates">
      <textarea placeholder="Description" class="experience-desc"></textarea>
    </div>`;
  experienceDiv.insertAdjacentHTML("beforeend", inputHtml);
}

// Add Project
function addProject() {
  projectCount++;
  const projectDiv = document.getElementById("projectInputs");
  const inputHtml = `
    <div id="project-${projectCount}" class="project">
      <input type="text" placeholder="Project Title" class="project-title">
      <textarea placeholder="Description" class="project-desc"></textarea>
    </div>`;
  projectDiv.insertAdjacentHTML("beforeend", inputHtml);
}

// Add Education
function addEducation() {
  educationCount++;
  const educationDiv = document.getElementById("educationInputs");
  const inputHtml = `
    <div id="education-${educationCount}" class="education">
      <input type="text" placeholder="Degree" class="education-degree">
      <input type="text" placeholder="Institution" class="education-institution">
      <input type="text" placeholder="Dates" class="education-dates">
    </div>`;
  educationDiv.insertAdjacentHTML("beforeend", inputHtml);
}

// Generate Resume
function generateResume() {
  const fullName = document.getElementById("fullName").value;
  const jobTitle = document.getElementById("jobTitle").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const summary = document.getElementById("summary").value;
  const skills = document.getElementById("skills").value;
  const additionalInfo = document.getElementById("additionalInfo").value;

  // Gather Experience
  const experienceInputs = document.querySelectorAll(".experience");
  let experiences = "";
  experienceInputs.forEach(exp => {
    const title = exp.querySelector(".experience-title").value;
    const company = exp.querySelector(".experience-company").value;
    const dates = exp.querySelector(".experience-dates").value;
    const desc = exp.querySelector(".experience-desc").value;
    experiences += `
      <div>
        <h3>${title} at ${company} (${dates})</h3>
        <p>${desc}</p>
      </div>`;
  });

  // Gather Projects
  const projectInputs = document.querySelectorAll(".project");
  let projects = "";
  projectInputs.forEach(proj => {
    const title = proj.querySelector(".project-title").value;
    const desc = proj.querySelector(".project-desc").value;
    projects += `
      <div>
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>`;
  });

  // Gather Education
  const educationInputs = document.querySelectorAll(".education");
  let education = "";
  educationInputs.forEach(edu => {
    const degree = edu.querySelector(".education-degree").value;
    const institution = edu.querySelector(".education-institution").value;
    const dates = edu.querySelector(".education-dates").value;
    education += `
      <div>
        <h3>${degree}</h3>
        <p>${institution} (${dates})</p>
      </div>`;
  });

  // Populate Resume Preview
  const previewContent = `
    <h1>${fullName}</h1>
    <h2>${jobTitle}</h2>
    <div class="contact-info">
      <p>${address}</p>
      <p>${email}</p>
      <p>${phoneNumber}</p>
    </div>
    <div class="section">
      <h3>Summary</h3>
      <p>${summary}</p>
    </div>
    <div class="section">
      <h3>Experience</h3>
      ${experiences}
    </div>
    <div class="section">
      <h3>Projects</h3>
      ${projects}
    </div>
    <div class="section">
      <h3>Skills</h3>
      <p>${skills}</p>
    </div>
    <div class="section">
      <h3>Education</h3>
      ${education}
    </div>
    <div class="section">
      <h3>Additional Information</h3>
      <ul><li>${additionalInfo.replace(/\n/g, '</li><li>')}</li></ul>
    </div>
  `;

  document.getElementById("previewContent").innerHTML = previewContent;
}
