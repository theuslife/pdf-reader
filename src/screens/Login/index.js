import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/styles';

export const Login = (props) => {

    const classes = styles()

    return (
        <div style={pureStyles.container}>
            <div style={pureStyles.inputContainer}>
                <TextField  className={classes.input} id="time" type="text" placeholder='E-mail' />
                <TextField className={classes.input} id="time" type="password" placeholder='Senha' />
                <Button className={classes.root} variant="contained" color="primary">Login</Button>
            </div>
        </div>
    );

}

const pureStyles = {
    container: {
        display: 'flex',
        // backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column'
    }
}

const styles = makeStyles({

    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    input: {
        background: '#fff',
        color: '#fff',
        borderRadius: 10,

        margin: 10,
        padding: 10
    }
});
