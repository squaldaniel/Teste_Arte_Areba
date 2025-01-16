"use client";

import React, { useEffect, useState } from 'react';
import { getUsers, createUser, User } from '../services/userServices';
import Listuser from '../components/listuser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
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
    <>
      <h1>Usuários</h1>
      <h2>Criar Novo Usuário</h2>
      <TextField id="user-name" label="Nome" variant="outlined" onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} />
      <TextField id="user-email" label="Email" variant="outlined" onChange={(e) => setNewUser({ ...newUser, email: e.target.value })} />
      <Button
        onClick={handleCreateUser}
        variant="contained"
        disabled={!newUser.name || !newUser.email}
      >
        Criar
      </Button>
      <Listuser Listuser={users} />
      
    </>
  );
};

export default UsersPage;
