// API wrapper that switches between real API and demo data for GitHub Pages
import { isDemoMode, demoApi, demoUser } from './demoData';
import * as behaviorApi from './behaviorApi';
import * as recordApi from './recordApi';
import userService from './userService';

// Wrapper functions that automatically switch between real API and demo
export const api = {
  // User functions
  login: async (credentials) => {
    if (isDemoMode()) {
      return demoApi.login(credentials);
    }
    return userService.login(credentials);
  },

  signup: async (userData) => {
    if (isDemoMode()) {
      return demoApi.signup(userData);
    }
    return userService.signup(userData);
  },

  logout: () => {
    if (isDemoMode()) {
      // Just clear any demo tokens from localStorage
      localStorage.removeItem('token');
      return Promise.resolve();
    }
    return userService.logout();
  },

  getUser: () => {
    if (isDemoMode()) {
      // Return demo user if we have a demo token
      const token = localStorage.getItem('token');
      if (token && token.startsWith('demo-token')) {
        return Promise.resolve(demoUser);
      }
      return Promise.resolve(null);
    }
    return userService.getUser();
  },

  // Behavior functions
  getAllBehaviors: async () => {
    if (isDemoMode()) {
      return demoApi.getAllBehaviors();
    }
    return behaviorApi.getAllBehaviors();
  },

  createBehavior: async (behaviorData) => {
    if (isDemoMode()) {
      return demoApi.createBehavior(behaviorData);
    }
    return behaviorApi.createBehavior(behaviorData);
  },

  // Recording functions
  getAllRecordings: async (behaviorId) => {
    if (isDemoMode()) {
      return demoApi.getAllRecordings();
    }
    return recordApi.showAllRecords(behaviorId);
  },

  createRecording: async (recordingData) => {
    if (isDemoMode()) {
      return demoApi.createRecording(recordingData);
    }
    return recordApi.createRecord(recordingData);
  },

  // Graph data
  getGraphData: async (behaviorId) => {
    if (isDemoMode()) {
      return demoApi.getGraphData(behaviorId);
    }
    // If you have a graph API endpoint, use it here
    // For now, return demo data structure
    return demoApi.getGraphData(behaviorId);
  }
};

// Export demo mode check for components to use
export { isDemoMode };

// Demo notice component data
export const getDemoNotice = () => {
  if (isDemoMode()) {
    return {
      show: true,
      message: "📊 Demo Mode: This is a demonstration of Journey with sample data. No data will be saved.",
      type: "info"
    };
  }
  return { show: false };
};