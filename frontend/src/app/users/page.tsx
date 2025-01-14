"use client";

import React, { useEffect, useState } from 'react';
import { getUsers, createUser, User } from '../services/userServices';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  const handleCreateUser = async () => {
    try {
      const user = await createUser(newUser);
      setUsers((prev) => [...prev, user]);
      setNewUser({ name: '', email: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <h2>Criar Novo Usuário</h2>
      <input
        type="text"
        placeholder="Nome"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newUser.email}
        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <button onClick={handleCreateUser}>Criar</button>
    </div>
  );
};

export default UsersPage;
  