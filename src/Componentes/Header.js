import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import './Header.css';


const useStyles = makeStyles({

    root:{
        maxWidth: 1600,
        marginTop: 35, 
        marginLeft: 30,
    },
 
    });

const Titulo = () => {
    const classes = useStyles();

    return(
            <div>
                <h2 className='Menu'> CATEGORIAS</h2>
            </div>
      
    )
}

export default Titulo;