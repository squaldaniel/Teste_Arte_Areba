'use client'
import React, { useState, useEffect } from "react";
import { TextField, Autocomplete, Container, Typography } from "@mui/material";
import api from './services/api';
import { useRouter } from 'next/navigation';

const AutocompleteWithBackend = () => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false); 
  const router = useRouter();

  const fetchData = async (query) => {
    try {
      setLoading(true);
      const response = await api.get("/users", {
        params: { query },
      });
      if (response.data && Array.isArray(response.data)) {
        setOptions(response.data);
      } else {
        setOptions([]);
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setOptions([]); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue) {
      const timeoutId = setTimeout(() => fetchData(inputValue), 500);
      return () => clearTimeout(timeoutId);
    } else {
      setOptions([]);
    }
  }, [inputValue]);

  const handleSelect = (event, selectedOption) => {
    if (selectedOption) {
      router.push(`/users/${selectedOption.id}`);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Autocomplete com Backend
      </Typography>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.name || "Sem resultados"}
        loading={loading}
        onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
        onChange={handleSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Pesquise"
            variant="outlined"
            placeholder="Digite algo"
            fullWidth
          />
        )}
        sx={{ width: 300 }}
      />
    </Container>
  );
};

export default AutocompleteWithBackend;
