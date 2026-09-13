// StudyLink Main JavaScript
// Handles frontend interactions and functionality

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarNav = document.querySelector('.navbar-nav');

  if (menuToggle && navbarNav) {
    menuToggle.addEventListener('click', function() {
      navbarNav.classList.toggle('active');

      // Animate menu toggle (hamburger to X)
      const spans = menuToggle.querySelectorAll('span');
      if (navbarNav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Password Toggle
  const passwordToggles = document.querySelectorAll('.toggle-password');
  passwordToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      const input = this.previousElementSibling;
      const icon = this.querySelector('i');

      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    });
  });

  // Close alerts
  const alertCloseButtons = document.querySelectorAll('.alert-close');
  alertCloseButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.parentElement.style.display = 'none';
    });
  });

  // Initialize tooltips (if using Bootstrap tooltips)
  // const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  // const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //   return new bootstrap.Tooltip(tooltipTriggerEl)
  // });

  // Handle form submissions (mock)
  const forms = document.querySelectorAll('form[data-mock-submit]');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Show loading state
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Processing...';
      submitButton.disabled = true;

      // Simulate API delay
      setTimeout(() => {
        // Show success message
        const formGroup = document.createElement('div');
        formGroup.className = 'alert alert-success mt-3';
        formGroup.innerHTML = `
          <span>Submitted successfully!</span>
          <button class="alert-close">&times;</button>
        `;
        this.parentNode.insertBefore(formGroup, this.nextSibling);

        // Reset form
        this.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;

        // Add close functionality to new alert
        formGroup.querySelector('.alert-close').addEventListener('click', function() {
          this.parentElement.style.display = 'none';
        });
      }, 1500);
    });
  });

  // Initialize dashboard tabs (if present)
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');

      // Remove active class from all buttons and panes
      document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
      });
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
      });

      // Add active class to clicked button and corresponding pane
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Handle availability selection (for tutor availability page)
  const dayButtons = document.querySelectorAll('.day-button');
  dayButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });

  // Handle time slot selection
  const timeSlots = document.querySelectorAll('.time-slot');
  timeSlots.forEach(slot => {
    slot.addEventListener('click', function() {
      this.classList.toggle('selected');
    });
  });
});

// Utility Functions
function showAlert(message, type = 'info') {
  // Remove any existing alerts
  const existingAlerts = document.querySelectorAll('.alert');
  existingAlerts.forEach(alert => alert.remove());

  // Create new alert
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.innerHTML = `
    <span>${message}</span>
    <button class="alert-close">&times;</button>
  `;

  // Add to page
  document.body.insertBefore(alert, document.body.firstChild);

  // Add close functionality
  alert.querySelector('.alert-close').addEventListener('click', function() {
    this.parentElement.style.display = 'none';
  });

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (alert.parentElement) {
      alert.remove();
    }
  }, 5000);
}

// Format date function
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

// Format time function
function formatTime(timeString) {
  return timeString; // Assuming HH:MM format
}

// Get current user (mock)
function getCurrentUser() {
  return mockCurrentUser;
}

// Get tutors (mock)
function getTutors(filters = {}) {
  let filteredTutors = [...mockTutors];

  // Filter by subject
  if (filters.subject && filters.subject !== '') {
    filteredTutors = filteredTutors.filter(tutor =>
      tutor.subjects.some(subject =>
        subject.toLowerCase().includes(filters.subject.toLowerCase())
      )
    );
  }

  // Filter by rating
  if (filters.minRating) {
    filteredTutors = filteredTutors.filter(tutor => tutor.rating >= filters.minRating);
  }

  // Filter by availability
  if (filters.availability && filters.availability !== '') {
    filteredTutors = filteredTutors.filter(tutor =>
      tutor.availability.some(day =>
        day.toLowerCase() === filters.availability.toLowerCase()
      )
    );
  }

  return filteredTutors;
}

// Sort tutors
function sortTutors(tutors, sortBy) {
  switch (sortBy) {
    case 'rating-high':
      return tutors.sort((a, b) => b.rating - a.rating);
    case 'rating-low':
      return tutors.sort((a, b) => a.rating - b.rating);
    case 'name-asc':
      return tutors.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return tutors.sort((a, b) => b.name.localeCompare(a.name));
    default:
      return tutors;
  }
}