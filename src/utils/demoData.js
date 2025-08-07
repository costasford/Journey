// Demo data for GitHub Pages deployment
// This provides mock data when the backend is not available

export const demoUser = {
  _id: "demo123",
  name: "Demo User",
  email: "demo@journey.app"
};

export const demoBehaviors = [
  {
    _id: "behavior1",
    name: "Hand Raising",
    description: "Student raises hand to participate in class",
    user: "demo123",
    createdAt: "2024-01-15T10:00:00Z"
  },
  {
    _id: "behavior2", 
    name: "Task Completion",
    description: "Successfully completes assigned academic task",
    user: "demo123",
    createdAt: "2024-01-16T11:30:00Z"
  },
  {
    _id: "behavior3",
    name: "Social Interaction",
    description: "Initiates appropriate peer interaction during break time",
    user: "demo123", 
    createdAt: "2024-01-17T09:15:00Z"
  }
];

export const demoRecordings = [
  {
    _id: "recording1",
    behavior: "behavior1",
    date: "2024-01-20",
    frequency: 5,
    duration: 15,
    notes: "Good participation during math lesson",
    user: "demo123"
  },
  {
    _id: "recording2", 
    behavior: "behavior1",
    date: "2024-01-21",
    frequency: 8,
    duration: 20,
    notes: "Excellent engagement in science discussion", 
    user: "demo123"
  },
  {
    _id: "recording3",
    behavior: "behavior2", 
    date: "2024-01-20",
    frequency: 3,
    duration: 45,
    notes: "Completed worksheet independently",
    user: "demo123"
  },
  {
    _id: "recording4",
    behavior: "behavior2",
    date: "2024-01-22", 
    frequency: 4,
    duration: 30,
    notes: "Finished reading assignment on time",
    user: "demo123"
  },
  {
    _id: "recording5",
    behavior: "behavior3",
    date: "2024-01-21",
    frequency: 2, 
    duration: 10,
    notes: "Played cooperatively with classmates",
    user: "demo123"
  }
];

export const demoGraphData = {
  "behavior1": [
    { date: "2024-01-15", frequency: 3 },
    { date: "2024-01-16", frequency: 4 },
    { date: "2024-01-17", frequency: 6 },
    { date: "2024-01-18", frequency: 5 },
    { date: "2024-01-19", frequency: 7 },
    { date: "2024-01-20", frequency: 5 },
    { date: "2024-01-21", frequency: 8 }
  ],
  "behavior2": [
    { date: "2024-01-15", frequency: 2 },
    { date: "2024-01-16", frequency: 2 }, 
    { date: "2024-01-17", frequency: 3 },
    { date: "2024-01-18", frequency: 1 },
    { date: "2024-01-19", frequency: 4 },
    { date: "2024-01-20", frequency: 3 },
    { date: "2024-01-21", frequency: 4 }
  ],
  "behavior3": [
    { date: "2024-01-15", frequency: 1 },
    { date: "2024-01-16", frequency: 0 },
    { date: "2024-01-17", frequency: 2 },
    { date: "2024-01-18", frequency: 1 },
    { date: "2024-01-19", frequency: 3 },
    { date: "2024-01-20", frequency: 2 },
    { date: "2024-01-21", frequency: 2 }
  ]
};

// Check if we're in demo mode (no backend available)
export const isDemoMode = () => {
  return process.env.NODE_ENV === 'production' && window.location.hostname.includes('github.io');
};

// Demo API functions that return promises like the real API
export const demoApi = {
  // User authentication
  login: (credentials) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ 
          user: demoUser,
          token: 'demo-token-' + Date.now()
        });
      }, 800); // Simulate network delay
    });
  },

  signup: (userData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          user: { ...demoUser, ...userData },
          token: 'demo-token-' + Date.now()
        });
      }, 1000);
    });
  },

  // Behaviors API
  getAllBehaviors: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(demoBehaviors);
      }, 500);
    });
  },

  createBehavior: (behaviorData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newBehavior = {
          _id: 'behavior' + Date.now(),
          ...behaviorData,
          user: demoUser._id,
          createdAt: new Date().toISOString()
        };
        resolve(newBehavior);
      }, 600);
    });
  },

  // Recordings API  
  getAllRecordings: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(demoRecordings);
      }, 400);
    });
  },

  createRecording: (recordingData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newRecording = {
          _id: 'recording' + Date.now(),
          ...recordingData,
          user: demoUser._id
        };
        resolve(newRecording);
      }, 700);
    });
  },

  // Graph data
  getGraphData: (behaviorId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(demoGraphData[behaviorId] || []);
      }, 300);
    });
  }
};