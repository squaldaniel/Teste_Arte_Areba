'use client';

import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import { getUsers, createUser } from '../services/userServices'; // Supondo que createUser esteja implementado em userServices
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FolderList = () => {
  const [users, setUsers] = useState([]);
  const [paginationData, setPaginationData] = useState({
    current_page: 1,
    last_page: 1,
    next_page_url: null,
    prev_page_url: null,
  });

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data); // Atribui o array de usuários a partir do atributo 'data' do JSON
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsers();
  }, []);

  // Função para lidar com mudanças nos campos do formulário
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Função para enviar os dados do novo usuário
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!newUser.name || !newUser.email) return;

    setLoading(true);
    try {
      await createUser(newUser); // Supondo que createUser retorne o novo usuário
      window.location.reload(); // Força o reload da página após a criação do usuário
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Formulário para adicionar novo usuário */}
      <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
        <TextField
          label="Nome"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="E-mail"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          fullWidth
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? 'Adicionando...' : 'Adicionar Usuário'}
        </Button>
      </form>

      {/* Lista de usuários */}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 5 }}>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.email} />
          </ListItem>
        ))}
      </List>

      {/* Paginação (opcional) */}
      <Pagination
        count={paginationData.last_page}
        page={paginationData.current_page}
        onChange={(e, page) => console.log('Página alterada:', page)} // Adicionar a lógica de troca de página
        color="primary"
        sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}
      />
    </>
  );
};

export default FolderList;

