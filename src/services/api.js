import axios from 'axios';

const API_URL = 'https://example.com/api';

export const getTrafficFlow = async () => {
  try {
    const response = await axios.get(`${API_URL}/trafficflow`);
    return response.data;
  } catch (error) {
    console.error('Error fetching traffic flow data:', error);
    throw error;
  }
};

export const getTrafficIncidents = async () => {
  try {
    const response = await axios.get(`${API_URL}/trafficincidents`);
    return response.data;
  } catch (error) {
    console.error('Error fetching traffic incidents data:', error);
    throw error;
  }
};

// Más funciones para obtener datos de sensores, etc.
