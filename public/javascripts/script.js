// Function to highlight the active nav link
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');

    let currentSection = '';

    // Loop through each section and check if it's in the viewport
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.id; // Store the id of the section that's in view
        }
    });

    // Update the active class on nav links
    navLinks.forEach(link => {
        link.classList.remove('active'); // Remove active class from all links
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active'); // Add active class to the current section's link
        }
    });
}

// Listen for scroll events to update active nav link
window.addEventListener('scroll', setActiveNavLink);

// Set active nav link on page load (in case the page is loaded in the middle)
document.addEventListener('DOMContentLoaded', setActiveNavLink);

  let lastScrollTop = 0; // To track the last scroll position
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling down, hide navbar
    if (currentScroll > lastScrollTop) {
      navbar.classList.add('hidden'); // Hide navbar
    } else {
      navbar.classList.remove('hidden'); // Show navbar
    }

    // Update last scroll position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  // Function to toggle the sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}
function closeSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");
}
