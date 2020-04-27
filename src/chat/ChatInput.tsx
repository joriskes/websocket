import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import {Button, Grid, TextField} from "@material-ui/core";

interface Props {
  sendMessage: (newMessage: string) => void,
  nick:string,
  updateNick: (newNick: string) => void
}

const ChatInput = ({sendMessage, nick, updateNick}: Props) => {
  const [message, setMessage] = useState<string>('');

  const handleMessageChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  }, [setMessage])

  const handleMessageSend = useCallback(() => {
    sendMessage(message);
    setMessage('');
  }, [message, setMessage, sendMessage]);

  const handleUpdateNick = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    updateNick(e.target.value);
  }, [updateNick])

  const catchEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage(message);
      setMessage('');
    }
  }, [message, sendMessage])

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <TextField fullWidth id="nick" label="Nickname" size="small" variant="outlined" value={nick} onChange={handleUpdateNick}/>
      </Grid>
      <Grid item xs={6}>
        <TextField fullWidth id="line" label="Message" size="small" variant="outlined" value={message} onChange={handleMessageChange} autoFocus onKeyPress={catchEnter}/>
      </Grid>
      <Grid item xs={3}>
        <Button fullWidth variant="contained" color="primary" onClick={handleMessageSend}>Send</Button>
      </Grid>
    </Grid>
  );
};

export default ChatInput;