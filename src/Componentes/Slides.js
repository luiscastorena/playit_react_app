import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MediaCard from './MediaCard';
import Grid from '@material-ui/core/Grid';
import './Slides.css';
import './Header.css';

const useStyles = makeStyles({

root:{
    maxWidth: 1600,
    marginTop: 35,
    marginLeft: 30,
},
imagenes:{
    maxWidth: 400
},
hoverGrid:{
    width: '100%',
    height:'100%',
    float: 'left',
    overflow:'hidden',
    position:'relative',
    textAlign:'center',
    cursor:'default',
}
});


const Slides = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={6} sm={3} className={'hovereffect'}>
                <MediaCard className={classes.imagenes} src={'https://images.pexels.com/photos/139038/pexels-photo-139038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt='logo' height={170} /> 
            </Grid>
            <Grid item xs={6} sm={3}>
                <MediaCard src={'https://images.pexels.com/photos/1367000/pexels-photo-1367000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt='logo'height={170} /> 
            </Grid>
            <Grid item xs={6} sm={3}>
                <MediaCard src={'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'} alt='logo'height={170} /> 
            </Grid>
            <Grid item xs={6} sm={3}>
                <MediaCard src={'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt='logo'height={170} /> 
            </Grid>  
        </Grid>  
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={6} sm={3}>
                <MediaCard src={'https://images.pexels.com/photos/4316/technology-computer-chips-gigabyte.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt='logo'height={170} /> 
            </Grid>
            <Grid item xs={6} sm={3} >
                <MediaCard src={'https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt='logo' height={170}/> 
            </Grid>
            <Grid item xs={6} sm={3}>
                <MediaCard src={'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2018/11/black-friday-2018-videojuegos.jpg?itok=e6Y6Hszk'} alt='logo' height={170}/> 
            </Grid>
            <Grid item xs={6} sm={3}>
                <MediaCard src={'https://c1.wallpaperflare.com/preview/29/660/50/ps4-playstation-playstation-4-playstation-slim.jpg'} alt='logo' height={170}/> 
            </Grid>  
        </Grid> 
      </Grid>
    </div>




    )
} 

export default Slides;