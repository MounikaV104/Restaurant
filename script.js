function toggleMenu(bt1menu) {
    let menu = document.getElementById(bt1menu);
    if (menu.style.display === "none") {
        menu.style.display = "block";  // Show menu
    } else {
        menu.style.display = "none";   // Hide menu
    }
}
function toggleMenu(bt2menu) {
    let menu = document.getElementById(bt2menu);
    if (menu.style.display === "none") {
        menu.style.display = "block";  // Show menu
    } else {
        menu.style.display = "none";   // Hide menu
    }
}
function toggleMenu(indian) {
    let menu = document.getElementById(indian);
    if (menu.style.display === "none") {
        menu.style.display = "block";  // Show menu
    } else {
        menu.style.display = "none";   // Hide menu
    }
}
// Get the elements
const showButton = document.getElementById('shows');
const content = document.getElementById('hides');
const backButton = document.getElementById('backButton');

// Show the content and hide the button on hover
showButton.addEventListener('click', () => {
  showButton.style.display = 'none'; // Hide the button on hover
  content.style.display = 'block'; // Show the content
});

// When the back button is clicked, hide content and show the button
backButton.addEventListener('click', () => {
  content.style.display = 'none'; // Hide the content
  showButton.style.display = 'block'; // Show the original button
});
