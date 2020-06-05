import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridList from '@material-ui/core/GridList';
import MediaCard from './MediaCard';
import './Header.css';


const useStyles = makeStyles ((theme) => ({
    root: {
        display :'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden', 
        backgroundColor: theme.palette.background.paper,
        objectFit:'cover'
    },
    gridList: {
        width: '100%',
        height: 600,
    },
}));

const MenuIma = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <h2 className='Menu'>MEJORES OFERTAS DEL 2020</h2>
        <GridList cellHeight={200} className={classes.gridList} cols={3} rows={3}>
        <GridListTile  key={'x'} cols={2} rows={2}>
                <MediaCard src={'https://compass-ssl.xbox.com/assets/82/9b/829bd7a9-678b-41cf-967f-6cf1262a7120.jpg?n=234525_Small-tout-0_1067x600.jpg'} alt='logo'  height={400} /> 
        </GridListTile>
        <GridListTile  key={'x'} cols={1} rows={2}>
                <MediaCard src={'https://compass-ssl.xbox.com/assets/65/81/6581482f-4f26-4225-a3e2-1a08505e2038.jpg?n=OWotW_Large-tout-0_1083x1222_03.jpg'} alt='logo' height={400} /> 
        </GridListTile>
        <GridListTile  key={'x'} cols={1} rows={1}>
                <MediaCard src={'https://compass-ssl.xbox.com/assets/a7/d8/a7d89410-8688-47e8-81de-010bf8d07079.jpg?n=Mortal-Kombat-11_Large-tout-0_Aftermath_1083x1222.jpg'} alt='logo' height={400} /> 
        </GridListTile>
        <GridListTile  key={'x'} cols={2} rows={1}>
                <MediaCard src={'https://areajugones.sport.es/wp-content/uploads/2019/07/The-Last-of-Us-Part-II.jpg'} alt='logo' height={400} /> 
        </GridListTile>
        <GridListTile  key={'x'} cols={1} rows={1}>
                <MediaCard src={'https://compass-ssl.xbox.com/assets/10/df/10df109e-4710-4ebe-a89c-cb1ff0777ea0.jpg?n=PGA-2K21_Large-tout-0_1083x1222.jpg'} alt='logo' height={400} /> 
        </GridListTile>
        <GridListTile  key={'x'} cols={1} rows={1}>
                <MediaCard src={'https://compass-ssl.xbox.com/assets/d5/6e/d56e4b6b-0a7f-4e77-b23d-4fe07b1f5281.jpg?n=Edgewater_Large-tout-0_1083x1222.jpg%22%20src=%22https://compass-ssl.xbox.com/assets/d5/6e/d56e4b6b-0a7f-4e77-b23d-4fe07b1f5281.jpg?n=Edgewater_Large-tout-0_1083x1222.jpg'} alt='logo' height={400} /> 
        </GridListTile>
        <GridListTile  key={'x'} cols={1} rows={1}>
                <MediaCard src={'https://compass-ssl.xbox.com/assets/88/54/88546ea8-1a8b-4929-8a35-a807034212f0.jpg?n=Halo-MCC-PC_Small-tout-0_Halo-2_1067x600.jpg'} alt='logo'  height={400}/> 
        </GridListTile>
 
        </GridList>
        </div>
    )
}
export default MenuIma;
