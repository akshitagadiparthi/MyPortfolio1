function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


function openAndDownload() {
  var url = './assets/Resume_Gadiparthi.pdf';
  
  // Open PDF in a new tab
  window.open(url, '_blank');

  // Simulate a download
  var a = document.createElement('a');
  a.href = url;
  a.download = 'Resume_Gadiparthi.pdf'; // Suggests a filename for saving
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

document.addEventListener("DOMContentLoaded", function() {
  const roles = ["Data Analyst", "Business Analyst", "Salesforce Admin"];
  const roleElement = document.getElementById("role");
  const cursorElement = document.getElementById("cursor");

  let currentIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseBetweenWords = 2000;

  function typeRole() {
    const currentRole = roles[currentIndex];
    const displayedText = currentRole.substring(0, currentCharIndex);
    roleElement.textContent = displayedText;
    
    // Toggle cursor visibility
    cursorElement.style.visibility = currentCharIndex < currentRole.length ? "visible" : "hidden";

    if (!isDeleting && currentCharIndex < currentRole.length) {
      currentCharIndex++;
      setTimeout(typeRole, typingSpeed);
    } else if (isDeleting && currentCharIndex > 0) {
      currentCharIndex--;
      setTimeout(typeRole, deletingSpeed);
    } else if (!isDeleting && currentCharIndex === currentRole.length) {
      setTimeout(() => {
        isDeleting = true;
        typeRole();
      }, pauseBetweenWords);
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % roles.length;
      setTimeout(typeRole, typingSpeed);
    }
  }

  typeRole();
});


document.addEventListener('DOMContentLoaded', function() {
  // Function to handle tab switching for a specific section
  function handleTabClick(event, tabSelector, contentSelector) {
    const tabContainer = event.target.closest(tabSelector);
    const tabs = tabContainer.querySelectorAll('.tab');
    const parentSection = tabContainer.parentElement;
    const tabContents = parentSection.querySelectorAll(contentSelector);

    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    event.target.classList.add('active');
    const target = document.getElementById(event.target.getAttribute('data-tab'));
    target.classList.add('active');
  }

  // Add event listeners to Experience tabs
  const experienceTabs = document.querySelectorAll('#experience .tab');
  experienceTabs.forEach(tab => tab.addEventListener('click', function(event) {
    handleTabClick(event, '#experience .tab-container', '#experience .tab-content');
  }));

  // Add event listeners to Academics tabs
  const academicsTabs = document.querySelectorAll('#academics .tab');
  academicsTabs.forEach(tab => tab.addEventListener('click', function(event) {
    handleTabClick(event, '#academics .tab-container', '#academics .tab-content');
  }));
});





