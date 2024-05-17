function toggleMenu() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
}
// Function to open the resume modal
function openResume() {
    document.getElementById('resumeModal').style.display = 'block';
}

// Function to close the resume modal
function closeResume() {
    document.getElementById('resumeModal').style.display = 'none';
}
