import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Input from '@mui/material/Input';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TodoApp.css';

export default function TodoApp({ task, tasks, inputTask, addTask }) {
    return (
        <div>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Todo
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{ padding: '16px' }}>
                <Input onChange={(e) => inputTask(e.target.value)} />
                <Button variant="contained" color="secondary" onClick={() => addTask(task)}>add</Button>
                <List>
                    <TransitionGroup>
                        {
                            tasks.map(function (item, i) {
                                return (
                                    <CSSTransition key={i} classNames="example" timeout={300}>
                                        <ListItem key={i}>
                                            <ListItemText primary={`* ${item}`} />
                                        </ListItem>
                                    </CSSTransition>
                                );
                            })
                        }
                    </TransitionGroup>
                </List>
            </div>
        </div>
    );
}