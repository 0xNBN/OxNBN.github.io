function showSection(sectionId) {
  // Hide all sections by removing 'active' class
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Activate the selected section with a blur transition
  document.getElementById(sectionId).classList.add('active');
  
  // Remove active state from all buttons and highlight the selected one
  document.querySelectorAll('.nav button').forEach(button => {
    button.classList.remove('active');
  });
  document.querySelector(`.nav button[onclick="showSection('${sectionId}')"]`).classList.add('active');
}
