import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function SiteHeader() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Chat app demo</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default SiteHeader;