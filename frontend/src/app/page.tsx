import * as React from 'react';
import Grid from '@mui/material/Grid2';
// import avios from 'axios';

export default function ButtonUsage() {
  
  return (
    <>
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

    </>

  )
};