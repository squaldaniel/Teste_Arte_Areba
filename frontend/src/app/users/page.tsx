// 'use client';

// import React, { useEffect, useState } from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Avatar from '@mui/material/Avatar';
// import EmailIcon from '@mui/icons-material/Email';
// import { getUsers, createUser } from '../services/userServices'; // Supondo que createUser esteja implementado em userServices
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

// const FolderList = () => {
//   const [users, setUsers] = useState([]);
//   const [paginationData, setPaginationData] = useState({
//     current_page: 1,
//     last_page: 1,
//     next_page_url: null,
//     prev_page_url: null,
//   });

//   const [newUser, setNewUser] = useState({
//     name: '',
//     email: '',
//   });

//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await getUsers();
//         setUsers(response.data); // Atribui o array de usuários a partir do atributo 'data' do JSON
//       } catch (error) {
//         console.error('Erro ao buscar usuários:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Função para lidar com mudanças nos campos do formulário
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   // Função para enviar os dados do novo usuário
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!newUser.name || !newUser.email) return;

//     setLoading(true);
//     try {
//       await createUser(newUser); // Supondo que createUser retorne o novo usuário
//       window.location.reload(); // Força o reload da página após a criação do usuário
//     } catch (error) {
//       console.error('Erro ao criar usuário:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* Formulário para adicionar novo usuário */}
//       <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
//         <TextField
//           label="Nome"
//           name="name"
//           value={newUser.name}
//           onChange={handleInputChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="E-mail"
//           name="email"
//           value={newUser.email}
//           onChange={handleInputChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           disabled={loading}
//         >
//           {loading ? 'Adicionando...' : 'Adicionar Usuário'}
//         </Button>
//       </form>

//       {/* Lista de usuários */}
//       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 5 }}>
//         {users.map((user) => (
//           <ListItem key={user.id}>
//             <ListItemAvatar>
//               <Avatar>
//                 <EmailIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary={user.name} secondary={user.email} />
//           </ListItem>
//         ))}
//       </List>

//       {/* Paginação (opcional) */}
//       <Pagination
//         count={paginationData.last_page}
//         page={paginationData.current_page}
//         onChange={(e, page) => console.log('Página alterada:', page)} // Adicionar a lógica de troca de página
//         color="primary"
//         sx={{ display: 'flex', justifyContent: 'center', margin: 2 }}
//       />
//     </>
//   );
// };

// export default FolderList;
//----------------------------------------------------------------
// 'use client';

// import React, { useEffect, useState } from 'react';
// import { getUsers, createUser } from '../services/userServices';
// import { List, ListItem, ListItemText, ListItemAvatar, Avatar, CircularProgress, TextField, Button } from '@mui/material';
// import EmailIcon from '@mui/icons-material/Email';
// import PaginationComponent from '../components/PaginationComponente';

// const FolderList = () => {
//   const [users, setUsers] = useState([]);
//   const [paginationData, setPaginationData] = useState({
//     current_page: 1,
//     last_page: 1,
//     next_page_url: null,
//     prev_page_url: null,
//     links: [],
//   });
//   const [newUser, setNewUser] = useState({
//     name: '',
//     email: '',
//   });
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await getUsers(paginationData.current_page);
//         setUsers(response.data);
//         setPaginationData({
//           current_page: response.current_page,
//           last_page: response.last_page,
//           next_page_url: response.next_page_url,
//           prev_page_url: response.prev_page_url,
//           links: response.links,
//         });
//       } catch (error) {
//         console.error('Erro ao buscar usuários:', error);
//       }
//     };

//     fetchUsers();
//   }, [paginationData.current_page]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!newUser.name || !newUser.email) return;

//     setLoading(true);
//     try {
//       await createUser(newUser);
//       window.location.reload();
//     } catch (error) {
//       console.error('Erro ao criar usuário:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
//         <TextField
//           label="Nome"
//           name="name"
//           value={newUser.name}
//           onChange={handleInputChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <TextField
//           label="E-mail"
//           name="email"
//           value={newUser.email}
//           onChange={handleInputChange}
//           fullWidth
//           required
//           margin="normal"
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           disabled={loading}
//         >
//           {loading ? 'Adicionando...' : 'Adicionar Usuário'}
//         </Button>
//       </form>

//       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 5 }}>
//         {users.map((user) => (
//           <ListItem key={user.id}>
//             <ListItemAvatar>
//               <Avatar>
//                 <EmailIcon />
//               </Avatar>
//             </ListItemAvatar>
//             <ListItemText primary={user.name} secondary={user.email} />
//           </ListItem>
//         ))}
//       </List>

//       <PaginationComponent
//         links={paginationData.links}
//         currentPage={paginationData.current_page}
//         totalPages={paginationData.last_page}
//         onPageChange={(page) => setPaginationData((prev) => ({ ...prev, current_page: page }))}
//       />
//     </>
//   );
// };

// export default FolderList;
//----------------------------------------------------------------
'use client';

import React, { useEffect, useState } from 'react';
import { getUsers, createUser } from '../services/userServices';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, CircularProgress, TextField, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PaginationComponent from '../components/PaginationComponente';

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

  const fetchUsers = async (page: number) => {
    try {
      const response = await getUsers(page); // Passando a página correta
      setUsers(response.data);
      setPaginationData({
        current_page: response.current_page,
        last_page: response.last_page,
        next_page_url: response.next_page_url,
        prev_page_url: response.prev_page_url,
      });
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  useEffect(() => {
    fetchUsers(paginationData.current_page);
  }, [paginationData.current_page]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!newUser.name || !newUser.email) return;

    setLoading(true);
    try {
      await createUser(newUser);
      window.location.reload();
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page: number) => {
    setPaginationData((prevData) => ({
      ...prevData,
      current_page: page,
    }));
  };

  return (
    <>
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

      <PaginationComponent
        currentPage={paginationData.current_page}
        lastPage={paginationData.last_page}
        onPageChange={handlePageChange} // Passando a função para o componente de paginação
      />
    </>
  );
};

export default FolderList;
