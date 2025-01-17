import api from './api';

export interface User {
  name: string;
  email: string;
}
export const getUsers = async (page: number = 1) => {
  try {
    const response = await api.get(`/users?page=${page}`);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};


export const createUser = (userData: Partial<User>): Promise<User> =>
  api.post('/users', userData);
