import React from 'react';
import Grid from '@material-ui/core/Grid'; 
import { makeStyles } from '@material-ui/core/styles';
import FBIcon from './FacebookIcon';
import InstaIcon from './InstaIcon';
import TwitterrIcon from './TwitterIcon';
import Logo from './Logo';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        backgroundColor:'#C5DCDE',
        width: '100%',
        fontSize: 14,
        textAlign: 'center',
        margin:'auto'

    },
    icon:{
        fontSize : 20,
        color: 'cadetblue',
        position: 'relative',
        top: -22,
        right:6,
        textAlign: 'center',
        marginTop:40,     
        '&:hover': {
            color:'cadetblue',  
        },   

    }
})

const Footer = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
               <Grid container spacing={3}>
                    <Grid item xs>
                        <Hidden xsUp>
                        <p> Copyright &copy;Todos los derechos reservados S.A de C.V  </p>
                        </Hidden>
                    </Grid>
                <Grid item xs>
                    <p> Copyright &copy;Todos los derechos reservados S.A de C.V  </p>

           
                <Hidden smDown>
                    <p>| Hecho por José Luis Castorena Zamarripa</p>

                </Hidden>
                </Grid>
                <Grid item xs>
                <FBIcon className={classes.icon} />
                <InstaIcon className={classes.icon}/>
                <TwitterrIcon className={classes.icon}/>     
                </Grid>
                </Grid>
           

        </div>
    )
}

export default Footer;