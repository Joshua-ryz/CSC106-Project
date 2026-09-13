// StudyLink Dashboard JavaScript
// Handles dashboard-specific functionality

document.addEventListener('DOMContentLoaded', function() {
  // Load dashboard data
  loadDashboardStats();
  loadUpcomingSessions();
  loadPendingRequests();
  loadRecentTutors();
  loadRecommendedTutors();
  loadNotifications();
});

// Mock data imports (in real implementation, these would come from API)
let mockCurrentUser = null;
let mockTutors = [];
let mockTutorRequests = [];

// Fetch mock data (simulating API calls)
function fetchMockData() {
  // In a real implementation, these would be actual fetch calls
  // For now, we'll just use the data from mock-data.js
  // This function exists for structure and would be replaced with real API calls

  // Since we're in a browser environment, we need to get the data from somewhere
  // For demo purposes, we'll assume the data is available globally
  // In practice, you'd either:
  // 1. Include mock-data.js in your HTML and access the variables directly
  // 2. Make actual fetch calls to mock API endpoints

  return new Promise(resolve => {
    setTimeout(() => {
      // This would normally come from an API
      resolve({
        user: mockCurrentUser || {
          id: 101,
          name: "Alex Rivera",
          avatar: "https://via.placeholder.com/150x150?text=AR",
          email: "alex.rivera@csu.edu.ph",
          studentId: "2022-12345",
          userType: "student",
          program: "BS Computer Science",
          year: "2nd Year"
        },
        tutors: mockTutors || [],
        requests: mockTutorRequests || []
      });
    }, 500);
  });
}

async function loadDashboardStats() {
  try {
    const data = await fetchMockData();

    // Update dashboard stats
    document.getElementById('total-tutors').textContent = data.tutors.length;
    document.getElementById('pending-requests').textContent =
      data.requests.filter(r => r.status === 'pending').length;
    document.getElementById('completed-sessions').textContent =
      Math.floor(Math.random() * 15) + 5; // Mock data
    document.getElementById('average-rating').textContent =
      (Math.random() * 0.5 + 4.3).toFixed(1); // Mock data between 4.3 and 4.8
  } catch (error) {
    console.error('Error loading dashboard stats:', error);
    showErrorState('stats');
  }
}

function loadUpcomingSessions() {
  const upcomingSessionsContainer = document.getElementById('upcoming-sessions');
  if (!upcomingSessionsContainer) return;

  // Mock upcoming sessions
  const mockSessions = [
    {
      id: 1,
      subject: "Java Programming",
      tutorName: "Juan Dela Cruz",
      tutorAvatar: "https://via.placeholder.com/50x50?text=JD",
      date: "2026-09-20",
      time: "15:00"
    },
    {
      id: 2,
      subject: "Calculus",
      tutorName: "Maria Santos",
      tutorAvatar: "https://via.placeholder.com/50x50?text=MS",
      date: "2026-09-22",
      time: "10:00"
    }
  ];

  upcomingSessionsContainer.innerHTML = '';

  if (mockSessions.length === 0) {
    upcomingSessionsContainer.innerHTML = `
      <p class="text-muted">No upcoming sessions scheduled.</p>
    `;
    return;
  }

  mockSessions.forEach(session => {
    const sessionElement = document.createElement('div');
    sessionElement.className = 'card mb-3';
    sessionElement.innerHTML = `
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start">
          <div>
            <h6 class="mb-1">${session.subject}</h6>
            <p class="mb-1"><small>Tutor: ${session.tutorName}</small></p>
            <p class="mb-1"><small>${formatDate(session.date)} at ${formatTime(session.time)}</small></p>
          </div>
          <img src="${session.tutorAvatar}" alt="${session.tutorName}" width="40" height="40" class="rounded-circle">
        </div>
      </div>
    `;
    upcomingSessionsContainer.appendChild(sessionElement);
  });
}

function loadPendingRequests() {
  const pendingRequestsContainer = document.getElementById('pending-requests-list');
  if (!pendingRequestsContainer) return;

  // Mock pending requests
  const mockRequests = [
    {
      id: 1,
      studentName: "Maria Garcia",
      studentAvatar: "https://via.placeholder.com/50x50?text=MG",
      subject: "Java Programming",
      topic: "Exception Handling",
      date: "2026-09-18",
      time: "14:00"
    },
    {
      id: 2,
      studentName: "Carlos Mendoza",
      studentAvatar: "https://via.placeholder.com/50x50?text=CM",
      subject: "Database Systems",
      topic: "SQL Joins",
      date: "2026-09-19",
      time: "16:00"
    }
  ];

  pendingRequestsContainer.innerHTML = '';

  if (mockRequests.length === 0) {
    pendingRequestsContainer.innerHTML = `
      <p class="text-muted">No pending requests.</p>
    `;
    return;
  }

  mockRequests.forEach(request => {
    const requestElement = document.createElement('div');
    requestElement.className = 'card mb-3';
    requestElement.innerHTML = `
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-start">
          <div class="flex-grow-1">
            <h6 class="mb-1">${request.studentName}</h6>
            <p class="mb-1"><small>${request.subject}</small></p>
            <p class="mb-1"><small>${request.topic}</small></p>
            <p class="mb-1"><small>${formatDate(request.date)} at ${formatTime(request.time)}</small></p>
          </div>
          <div>
            <button class="btn btn-sm btn-outline me-2">Accept</button>
            <button class="btn btn-sm btn-outline">Decline</button>
          </div>
        </div>
      </div>
    `;
    pendingRequestsContainer.appendChild(requestElement);
  });
}

function loadRecentTutors() {
  const recentTutorsContainer = document.getElementById('recent-tutors');
  if (!recentTutorsContainer) return;

  // Get 3 random tutors as recent tutors
  const shuffled = [...mockTutors].sort(() => 0.5 - Math.random());
  const recentTutors = shuffled.slice(0, Math.min(3, shuffled.length));

  recentTutorsContainer.innerHTML = '';

  if (recentTutors.length === 0) {
    recentTutorsContainer.innerHTML = `
      <p class="text-muted">No recent tutors.</p>
    `;
    return;
  }

  recentTutors.forEach(tutor => {
    const tutorElement = document.createElement('div');
    tutorElement.className = 'card h-100';
    tutorElement.innerHTML = `
      <div class="card-body text-center">
        <img src="${tutor.avatar}" alt="${tutor.name}" class="rounded-circle mb-3" width="60" height="60">
        <h5 class="card-title">${tutor.name}</h5>
        <p class="card-text text-muted">${tutor.program}</p>
        <div class="rating mb-2">
          <div class="rating-stars">
            ${Array(5).fill(0).map((_, i) =>
              `<svg class="star ${i < tutor.rating ? '' : 'star-outline'}" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`
            ).join('')}
          </div>
          <span>${tutor.rating}/5 (${tutor.reviews} reviews)</span>
        </div>
        <p class="small text-muted">${tutor.subjects.slice(0, 2).join(', ')}${tutor.subjects.length > 2 ? '...' : ''}</p>
        <button class="btn btn-sm btn-outline w-100">View Profile</button>
      </div>
    `;
    recentTutorsContainer.appendChild(tutorElement);
  });
}

function loadRecommendedTutors() {
  const recommendedTutorsContainer = document.getElementById('recommended-tutors');
  if (!recommendedTutorsContainer) return;

  // Get tutors with highest rating as recommended
  const recommendedTutors = [...mockTutors]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, Math.min(3, mockTutors.length));

  recommendedTutorsContainer.innerHTML = '';

  if (recommendedTutors.length === 0) {
    recommendedTutorsContainer.innerHTML = `
      <p class="text-muted">No recommended tutors.</p>
    `;
    return;
  }

  recommendedTutors.forEach(tutor => {
    const tutorElement = document.createElement('div');
    tutorElement.className = 'card h-100';
    tutorElement.innerHTML = `
      <div class="card-body text-center">
        <img src="${tutor.avatar}" alt="${tutor.name}" class="rounded-circle mb-3" width="60" height="60">
        <h5 class="card-title">${tutor.name}</h5>
        <p class="card-text text-muted">${tutor.program}</p>
        <div class="rating mb-2">
          <div class="rating-stars">
            ${Array(5).fill(0).map((_, i) =>
              `<svg class="star ${i < tutor.rating ? '' : 'star-outline'}" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`
            ).join('')}
          </div>
          <span>${tutor.rating}/5 (${tutor.reviews} reviews)</span>
        </div>
        <p class="small text-muted">${tutor.subjects.slice(0, 2).join(', ')}${tutor.subjects.length > 2 ? '...' : ''}</p>
        <button class="btn btn-sm btn-outline w-100">View Profile</button>
      </div>
    `;
    recommendedTutorsContainer.appendChild(tutorElement);
  });
}

function loadNotifications() {
  const notificationsContainer = document.getElementById('notifications-list');
  if (!notificationsContainer) return;

  // Mock notifications
  const mockNotifications = [
    {
      id: 1,
      message: "Juan Dela Cruz accepted your tutoring request for Java Programming",
      time: "2 hours ago",
      unread: true
    },
    {
      id: 2,
      message: "New tutor Maria Santos is now available for Calculus help",
      time: "1 day ago",
      unread: false
    }
  ];

  notificationsContainer.innerHTML = '';

  if (mockNotifications.length === 0) {
    notificationsContainer.innerHTML = `
      <p class="text-muted">No notifications.</p>
    `;
    return;
  }

  mockNotifications.forEach(notification => {
    const notificationElement = document.createElement('div');
    notificationElement.className = `d-flex align-items-start mb-3 ${notification.unread ? 'fw-bold' : ''}`;
    notificationElement.innerHTML = `
      <div class="flex-shrink-0">
        <img src="https://via.placeholder.com/40x40?text=🔔" alt="Notification" width="32" height="32" class="rounded-circle">
      </div>
      <div class="flex-grow-1 ms-2">
        <p class="mb-1">${notification.message}</p>
        <small class="text-muted">${notification.time}</small>
      </div>
    `;
    notificationsContainer.appendChild(notificationElement);
  });
}

// Helper function to show error state
function showErrorState(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = `
      <div class="alert alert-info">
        Unable to load data. Please try again later.
      </div>
    `;
  }
}

// Utility functions (same as in main.js for consistency)
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

function formatTime(timeString) {
  return timeString; // Assuming HH:MM format
}

// Make functions available globally for use in HTML
window.loadDashboardStats = loadDashboardStats;
window.loadUpcomingSessions = loadUpcomingSessions;
window.loadPendingRequests = loadPendingRequests;
window.loadRecentTutors = loadRecentTutors;
window.loadRecommendedTutors = loadRecommendedTutors;
window.loadNotifications = loadNotifications;