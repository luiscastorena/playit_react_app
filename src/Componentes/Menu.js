import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Grid,Link } from '@material-ui/core';


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
const Menu = () => {
    const classes = useStyles();

    return(
            <div>
                
                <Link  className={classes.item}
                component="button"
                variant="body2"
                underline={'none'}
                onClick={() => { 
                }}>
                Inicio 
                </Link>
                <Link className={classes.item}
                component="button"
                variant="body2"
                underline={'none'}
                onClick={() => {
                }}>
                Juegos 
                </Link>
                <Link className={classes.item}
                component="button"
                variant="body2"
                underline={'none'}
                onClick={() => {
                }}>
                    Contacto
                                    </Link>

            </div>
      
    )
}

export default Menu;