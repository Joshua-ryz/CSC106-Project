// StudyLink Mock Data
// This file contains all mock data for the front-end prototype

// Mock Tutors Data
const mockTutors = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    avatar: "https://via.placeholder.com/150x150?text=JD",
    program: "BS Computer Science",
    year: "2nd Year",
    subjects: ["Java Programming", "C Programming", "Data Structures", "Discrete Mathematics"],
    expertise: ["Object-Oriented Programming", "Algorithms", "Database Design"],
    rating: 4.8,
    reviews: 24,
    availability: ["Monday", "Wednesday", "Friday"],
    bio: "Passionate about helping students understand programming concepts. I have 2 years of tutoring experience and specialize in making complex topics easy to understand.",
    responseTime: "Within 1 hour",
    sessionsCompleted: 42
  },
  {
    id: 2,
    name: "Maria Santos",
    avatar: "https://via.placeholder.com/150x150?text=MS",
    program: "BS Mathematics",
    year: "3rd Year",
    subjects: ["Calculus", "Algebra", "Statistics", "Geometry"],
    expertise: ["Differential Equations", "Statistical Analysis", "Mathematical Modeling"],
    rating: 4.9,
    reviews: 31,
    availability: ["Tuesday", "Thursday", "Saturday"],
    bio: "Math enthusiast who loves breaking down complex problems into simple steps. I focus on building strong foundations in mathematical concepts.",
    responseTime: "Within 30 minutes",
    sessionsCompleted: 58
  },
  {
    id: 3,
    name: "Carlos Mendoza",
    avatar: "https://via.placeholder.com/150x150?text=CM",
    program: "BS Information Technology",
    year: "2nd Year",
    subjects: ["Web Development", "Database Systems", "Networking", "Software Engineering"],
    expertise: ["Full-Stack Development", "SQL Optimization", "Network Security"],
    rating: 4.7,
    reviews: 18,
    availability: ["Monday", "Wednesday", "Friday"],
    bio: "IT student with hands-on experience in web development and database management. I help students bridge theory and practical application.",
    responseTime: "Within 2 hours",
    sessionsCompleted: 33
  },
  {
    id: 4,
    name: "Ana Rodriguez",
    avatar: "https://via.placeholder.com/150x150?text=AR",
    program: "BS Physics",
    year: "4th Year",
    subjects: ["Physics", "Calculus-Based Physics", "Mechanics", "Electricity & Magnetism"],
    expertise: ["Problem-Solving Strategies", "Lab Report Writing", "Conceptual Understanding"],
    rating: 4.6,
    reviews: 22,
    availability: ["Tuesday", "Thursday"],
    bio: "Physics major passionate about helping students connect physics concepts to real-world applications. I focus on developing problem-solving skills.",
    responseTime: "Within 1 hour",
    sessionsCompleted: 27
  },
  {
    id: 5,
    name: "Roberto Lim",
    avatar: "https://via.placeholder.com/150x150?text=RL",
    program: "BS English",
    year: "3rd Year",
    subjects: ["English Literature", "Academic Writing", "Grammar", "Public Speaking"],
    expertise: ["Essay Writing", "Literary Analysis", "Research Papers"],
    rating: 4.8,
    reviews: 26,
    availability: ["Monday", "Wednesday", "Friday"],
    bio: "English major dedicated to helping students improve their communication skills and academic writing abilities.",
    responseTime: "Within 45 minutes",
    sessionsCompleted: 45
  },
  {
    id: 6,
    name: "Sophia Chen",
    avatar: "https://via.placeholder.com/150x150?text=SC",
    program: "BS Biology",
    year: "2nd Year",
    subjects: ["Biology", "Chemistry", "Anatomy", "Physiology"],
    expertise: ["Molecular Biology", "Biochemistry", "Lab Techniques"],
    rating: 4.5,
    reviews: 15,
    availability: ["Tuesday", "Thursday", "Saturday"],
    bio: "Biology student passionate about life sciences. I help students understand complex biological processes through visualization and analogies.",
    responseTime: "Within 1 hour",
    sessionsCompleted: 19
  }
];

// Mock User Data
const mockCurrentUser = {
  id: 101,
  name: "Alex Rivera",
  avatar: "https://via.placeholder.com/150x150?text=AR",
  email: "alex.rivera@csu.edu.ph",
  studentId: "2022-12345",
  userType: "student",
  program: "BS Computer Science",
  year: "2nd Year"
};

// Mock Tutor Requests Data
const mockTutorRequests = [
  {
    id: 1,
    studentName: "Alex Rivera",
    studentAvatar: "https://via.placeholder.com/100x100?text=AR",
    tutorName: "Juan Dela Cruz",
    subject: "Java Programming",
    topic: "Object-Oriented Programming Concepts",
    date: "2026-09-20",
    time: "14:00",
    message: "Hi Juan, I'm struggling with understanding inheritance and polymorphism in Java. Could you help me grasp these concepts better?",
    status: "pending"
  },
  {
    id: 2,
    studentName: "Maria Garcia",
    studentAvatar: "https://via.placeholder.com/100x100?text=MG",
    tutorName: "Maria Santos",
    subject: "Calculus",
    topic: "Integration Techniques",
    date: "2026-09-21",
    time: "10:00",
    message: "I need help with integration by parts and trigonometric substitution for my upcoming exam.",
    status: "pending"
  }
];

// Mock Messages Data
const mockConversations = [
  {
    id: 1,
    tutorName: "Juan Dela Cruz",
    tutorAvatar: "https://via.placeholder.com/50x50?text=JD",
    lastMessage: "Sure! I can help you with OOP concepts. When are you available this week?",
    timestamp: "2026-09-12 14:30",
    unread: 1
  },
  {
    id: 2,
    tutorName: "Maria Santos",
    tutorAvatar: "https://via.placeholder.com/50x50?text=MS",
    lastMessage: "Thanks for the session yesterday! It really helped clarify the integration techniques.",
    timestamp: "2026-09-11 16:45",
    unread: 0
  }
];

// Mock Messages History
const mockMessages = {
  1: [ // Conversation with Juan Dela Cruz
    {
      id: 1,
      sender: "student",
      message: "Hi Juan, I'm struggling with understanding inheritance and polymorphism in Java.",
      timestamp: "2026-09-12 14:00"
    },
    {
      id: 2,
      sender: "tutor",
      message: "Hey Alex! I'd be happy to help you with those concepts. Inheritance and polymorphism are fundamental OOP principles. Let me break them down for you.",
      timestamp: "2026-09-12 14:05"
    },
    {
      id: 3,
      sender: "student",
      message: "That would be great! I'm particularly confused about when to use inheritance vs composition.",
      timestamp: "2026-09-12 14:10"
    }
  ],
  2: [ // Conversation with Maria Santos
    {
      id: 1,
      sender: "student",
      message: "Hi Maria, I need help with integration by parts and trigonometric substitution.",
      timestamp: "2026-09-11 16:00"
    },
    {
      id: 2,
      sender: "tutor",
      message: "Hello! Those are important techniques in calculus. Let's start with integration by parts - it's based on the product rule for derivatives.",
      timestamp: "2026-09-11 16:05"
    }
  ]
};

// Mock Reviews Data
const mockReviews = [
  {
    id: 1,
    tutorName: "Juan Dela Cruz",
    studentName: "Alex Rivera",
    rating: 5,
    comment: "Juan helped me finally understand OOP concepts. His explanations were clear and patient.",
    date: "2026-09-10"
  },
  {
    id: 2,
    tutorName: "Juan Dela Cruz",
    studentName: "Maria Garcia",
    rating: 4,
    comment: "Great tutor! Very knowledgeable about Java programming.",
    date: "2026-09-08"
  },
  {
    id: 3,
    tutorName: "Maria Santos",
    studentName: "Carlos Mendoza",
    rating: 5,
    comment: "Maria made calculus much easier to understand. Highly recommend!",
    date: "2026-09-05"
  }
];

// Export data for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    mockTutors,
    mockCurrentUser,
    mockTutorRequests,
    mockConversations,
    mockMessages,
    mockReviews
  };
}