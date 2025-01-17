'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Container, Typography, CircularProgress, Button } from '@mui/material';
import Link from 'next/link';  // Corrigir para importar de 'next/link'
import api from '../../services/api';

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log(`Buscar usuário com id: ${id}`);
        const response = await api.get(`/users/${id}`);
        setUser(response[0]);
        console.log(response);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error.response || error.message);
        setUser(null);
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
      <Typography variant="body1">ID: <b>{user.id}</b></Typography>
      <Typography variant="body1">Nome: <b>{user.name}</b></Typography>
      <Typography variant="body1">Username: <b>{user.username}</b></Typography>
      <Typography variant="body1">Email: <b>{user.email}</b></Typography>
      <Typography variant="body1">Telefone: <b>{user.phone}</b></Typography>
      <Typography variant="body1">Website: <b>{user.website}</b></Typography>

      {/* Link para a página /users */}
      <Link href="/users" passHref>
        <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
          Ir para a lista de usuários
        </Button>
      </Link>
    </Container>
  );
};

export default UserPage;
