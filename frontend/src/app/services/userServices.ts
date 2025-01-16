import api from './api';

export interface User {
  name: string;
  email: string;
}

export const getUsers = (): Promise<User[]> => api.get('/users');

export const createUser = (userData: Partial<User>): Promise<User> =>
  api.post('/users', userData);
