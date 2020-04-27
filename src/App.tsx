import React from 'react';
import Chat from './chat/Chat';
import {Box, Container} from '@material-ui/core'
import SiteHeader from './SiteHeader';

function App() {
  return (
    <div className="App">
      <Container fixed>
        <SiteHeader />
        <Box py={12}>
          <Chat />
        </Box>
      </Container>
    </div>
  );
}

export default App;
