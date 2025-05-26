
const BACKEND_URL = 'https://taskverse-backend.onrender.com';
import { getToken } from './auth';

export const getAllUsers = async () => {
  const response = await fetch(`${BACKEND_URL}/api/admin/users`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return await response.json();
};

export const getAllTasks = async () => {
  const response = await fetch(`${BACKEND_URL}/api/admin/tasks`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return await response.json();
};

export const getAllTeams = async () => {
  const response = await fetch(`${BACKEND_URL}/api/admin/teams`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return await response.json();
};

export const deleteUser = async (userId) => {
  const response = await fetch(`${BACKEND_URL}/api/admin/user/${userId}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return await response.json();
};