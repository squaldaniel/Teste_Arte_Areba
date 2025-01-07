import React, { useState, useEffect, Component } from 'react';
import { Inertia } from "@inertiajs/inertia";
import { usePage } from '@inertiajs/react';
import Grid from '../Components/Grid'

const MusicManager = () => {
  const { props } = usePage(); // Pega dados do backend via Inertia
  const [songs, setSongs] = useState(props.songs || []);
  const [newSong, setNewSong] = useState('');
  const [editSong, setEditSong] = useState(null);

  // Adiciona uma música
  const addSong = () => {
    Inertia.post('/songs', { title: newSong }, {
      onSuccess: () => setNewSong(''),
    });
  };

  // Atualiza uma música
  const updateSong = () => {
    if (editSong) {
      Inertia.put(`/songs/${editSong.id}`, { title: editSong.title }, {
        onSuccess: () => setEditSong(null),
      });
    }
  };

  // Exclui uma música
  const deleteSong = (id) => {
    if (confirm('Deseja realmente excluir esta música?')) {
      Inertia.delete(`/songs/${id}`);
    }
  };

  return (
    <div>
      <h1>Gerenciador de Músicas</h1>

      <h2>Adicionar Música</h2>
      <input
        type="text"
        value={newSong}
        onChange={(e) => setNewSong(e.target.value)}
        placeholder="Nome da música"
      />
      <button onClick={addSong}>Adicionar</button>

      <h2>Editar Música</h2>
      {editSong && (
        <div>
          <input
            type="text"
            value={editSong.title}
            onChange={(e) => setEditSong({ ...editSong, title: e.target.value })}
          />
          <button onClick={updateSong}>Salvar</button>
        </div>
      )}

      <h2>Lista de Músicas</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title}
            <button onClick={() => setEditSong(song)}>Editar</button>
            <button onClick={() => deleteSong(song.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicManager;
