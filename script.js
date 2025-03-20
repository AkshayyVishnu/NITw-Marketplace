// Theme Toggle
document.addEventListener("DOMContentLoaded", function () {
    const storedTheme = localStorage.getItem("theme") || "light-theme";
    document.body.className = storedTheme;
  });
  
  document.getElementById("toggleTheme").addEventListener("click", function () {
    if (document.body.classList.contains("light-theme")) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light-theme");
    }
  });
  
  // Typewriter Effect
  const typedElement = document.querySelector(".typed-animation h1");
  const text = "NITw Marketplace Welcomes you!";
  let index = 0;
  
  function typeLetter() {
    if (index < text.length) {
      typedElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetter, 100);
    }
  }
  typeLetter();

  // Add this code to your existing script.js file

// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get all FAQ items
  const faqItems = document.querySelectorAll('.faq-item');
  
  // Add click event listener to each FAQ item
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Toggle the active class on the clicked item
      item.classList.toggle('active');
      
      // Close other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
    });
  });
});