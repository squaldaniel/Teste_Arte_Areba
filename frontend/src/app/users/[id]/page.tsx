'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Container, Typography, CircularProgress } from '@mui/material';
import api from '../../services/api';

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!user) {
    return (
      <Container sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h5">Usuário não encontrado</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Dados do Usuário
      </Typography>
      <Typography variant="body1">ID: {user.id}</Typography>
      <Typography variant="body1">Nome: {user.name}</Typography>
      <Typography variant="body1">Username: {user.username}</Typography>
      <Typography variant="body1">Email: {user.email}</Typography>
      <Typography variant="body1">Telefone: {user.phone}</Typography>
      <Typography variant="body1">Website: {user.website}</Typography>
    </Container>
  );
};

export default UserPage;
