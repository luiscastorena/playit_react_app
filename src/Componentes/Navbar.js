import React from 'react';
import './Navbar.css';
import Logo from './Logo';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Menu from './Menu';
import { Box } from '@material-ui/core';
import MenuMovil from './MenuMovil';

const useStyles = makeStyles({
    root: {
        flexGrow:1
    },
    menu:{
        alignItems:'flex-end',
        textAlign:'right'
    },
    item:{
        paddingLeft:15,
        fontSize:20,
        color:'dimgrey',
        fontWeight: 'bold',
        lineHeight:4,
        '&:hover': {
            color:'cadetblue',  
        },
    },
    boton:{
        color: '#fff',
        backgroundColor: 'cadetblue',
        fontSize: 14 ,
        marginLeft: 10,
    }
  });

const Navbar = () => {
    const classes = useStyles();
    return(
    <div id='Navbar'>
        <Grid container spacing={1}>

            <Grid item xs={3} >
            <Hidden xsDown>
            <Grid item xs={9} className={classes.menu}>
                <Logo/>
            </Grid>
            </Hidden>

            </Grid>


            <Hidden xsDown>
            <Grid item xs={9} className={classes.menu}>
                <Menu/>
            </Grid>
            </Hidden>
            <Hidden smUp>
            <Grid item xs={9} className={classes.menu}>
                <MenuMovil/>
            </Grid>
            </Hidden>



        </Grid>
        

    </div>

)
}

export default Navbar;