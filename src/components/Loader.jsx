import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = () => {
  const customColor = "#ff0000"; 

  return (
    <Box minHeight="95vh">
      <Stack direction='row' justifyContent='center' alignItems='center' height='80vh'>
        <CircularProgress style={{ color: customColor }} />
      </Stack>
    </Box>
  );
}

export default Loader;
