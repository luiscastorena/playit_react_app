import React from 'react';
import Carousel from 'react-material-ui-carousel'
import MediaCard from './MediaCard';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

    root:{
        objectFit:'fill'
    }
    });

    

function Carusel(props)
{

    var items = [
        {
            imagen:'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt :  450

        },
        {
            imagen:'https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt :  450

        },
        {
            imagen:'https://images.pexels.com/photos/159393/gamepad-video-game-controller-game-controller-controller-159393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt :  450

        }
    ]
 
    return (
        <Carousel>
            {
                items.map( item => <Item item={item} /> )
                
            }

        </Carousel>
    )
}
 
function Item(props)
{
    const classes = useStyles();

    return (
        <div >
            <MediaCard  src={props.item.imagen} height={props.item.alt} objectFit={'fill'}  />
            <p>Texto?</p>
        </div>
    )
}


export default Carusel;