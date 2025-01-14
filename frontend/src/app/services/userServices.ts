import api from './api';

// Defina o tipo do usuário
export interface User {
  id: number;
  name: string;
  email: string;
}

// Função para buscar todos os usuários
export const getUsers = async (): Promise<User[]> => {
  try {
    return await api.get('/users'); // O interceptor já retorna os dados
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao buscar usuários');
  }
};

// Função para criar um novo usuário
export const createUser = async (userData: Partial<User>): Promise<User> => {
  try {
    return await api.post('/users', userData);
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Erro ao criar usuário');
  }
};
