function showSection(sectionId) {
  // Remove active class from all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Set the clicked section as active
  document.getElementById(sectionId).classList.add('active');
  
  // Remove active class from all buttons and highlight the selected one
  document.querySelectorAll('.nav button').forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector(`.nav button[onclick="showSection('${sectionId}')"]`).classList.add('active');
}
