let authToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IjE0NjU2NTQ2NCIsInBhc3N3b3JkIjoiMjY1NDY1NDY1NCJ9.o6UNeIWtjF04XpRJeIrHZsHMKJDLd-3orED_dELLX_Q";

export const setAuthToken = (token) => {
  authToken = token;
};

export const getAuthToken = () => authToken;
