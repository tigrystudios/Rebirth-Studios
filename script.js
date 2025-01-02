// Select the hamburger button and sidebar
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

// Toggle the sidebar visibility
hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
