import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import avios from 'axios';

export default function ButtonUsage() {
  
  return (
    <>
      <Container>
        <Button variant="contained">Ola mundo</Button>
        <Grid container spacing={2}>
          <Grid size={8}>
            dados 8
          </Grid>
          <Grid size={4}>
            dados 4
          </Grid>
          <Grid size={4}>
            dados 4
          </Grid>
          <Grid size={8}>
            dados 8
          </Grid>
        </Grid>
      </Container>

    </>

  )
};