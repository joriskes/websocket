import React from 'react';
import {WebSocketMessage} from "./types";
import {Grid} from "@material-ui/core";

interface Props {
  message: WebSocketMessage;
}

const ChatMessage = (props: Props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <strong>{props.message.name}</strong>
      </Grid>
      <Grid item xs={9}>
        <em>{props.message.message}</em>
      </Grid>
    </Grid>
  );
};

export default ChatMessage;
