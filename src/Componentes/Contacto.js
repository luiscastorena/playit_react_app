import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField,Button, Box}  from '@material-ui/core/';


const useStyles = makeStyles({

root:{
    maxWidth: 1600,
    marginTop: 35,
    marginLeft: 30,
},
boton:{
    backgroundColor:'cadetblue',
    color:'white',
    '&:hover': {
        backgroundColor:'white',
        color:'cadetblue',  
    },
    marginLeft:'40%', 
    padding: 10,
    marginTop:10   
},
caja:{
    borderTop: 'cadetblue'
}
});


const Contacto = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Box className={classes.caja}>
                <TextField id="outlined-basic" label="Nombre" variant="outlined" fullWidth margin={'normal'} size={'small'}/>
              <TextField id="outlined-basic" label="Correo Electrónico" variant="outlined" fullWidth margin={'normal'} size={'small'}/>
              <Button className={classes.boton} variant="outlined" onClick={() => { alert('Gracias, le enviaremos las ofertas a su correo electrónico') }}>Recibir Ofertas</Button> 
            </Box>

        </div>




    )
} 

export default Contacto;