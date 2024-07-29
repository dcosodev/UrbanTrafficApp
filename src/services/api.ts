import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/', // Asegúrate de que la URL sea correcta
});

export const getTrafficFlows = () => api.get('trafficflow/');
export const getTrafficIncidents = () => api.get('trafficincident/');
export const getTrafficSensors = () => api.get('trafficsensor/');

export default api;
