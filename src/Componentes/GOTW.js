import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import MediaCard from './MediaCard';
import {Grid,Paper,Card,CardActionArea,CardMedia,CardContent,Typography,CardActions, Hidden} from '@material-ui/core/';


const useStyles = makeStyles({

    root:{
        maxWidth: 1600,
        marginTop: 35, 
        marginLeft: 30,
    },
    texto:{
        margin:20,
        textAlign: 'justify'
    },

    imagenes:{
        maxHeight:400,
        maxWidth:400,
    }
    });

const GOTW = () => {
    const classes = useStyles();

    return(
            <div>
                <br></br>
                <h2 > Marvel's Avengers</h2>
                <br></br>
                <MediaCard src={'https://store-images.s-microsoft.com/image/apps.25384.14242771798761748.65f3517e-f4b4-47c5-ae59-40027e04c359.97e5f2e6-63fd-4bf8-a438-957734abb5a9?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF'}/>
                <p className={classes.texto}>Marvel's Avengers es un épico juego de acción y aventura en tercera persona que combina una original historia cinematográfica con modos de juego en solitario y cooperativos*. Forma un equipo de hasta cuatro jugadores en línea, domina habilidades extraordinarias, personaliza un creciente grupo de héroes y defiende la Tierra de amenazas que van en aumento.
                    El juego incluye héroes icónicos como nunca los habías visto, villanos notables, lugares conocidos y poderes alucinantes, todo esto ambientado en una historia original de Avengers.</p>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                        <Card height={500}>
                            <CardActionArea>
                                <CardMedia 
                                    component="img"
                                    alt="Captain America"
                                    height="300"
                                    image="https://fotografias-neox.atresmedia.com/clipping/cmsimages01/2019/08/30/58131F41-ADDA-43FD-BB55-723870D3CFAA/58.jpg" 
                                    title="Captain America"/>
                                    <Hidden smDown>
                                            <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            Captain America
                                            </Typography>
                                             <Typography variant="body2" color="textSecondary" component="p">
                                             El gobierno estadounidense, en un esfuerzo por crear un ejército de tropas superior durante la Segunda Guerra Mundial, idea una iniciativa secreta en la que se inyecta a Steve Rogers con un suero experimental de supersoldado, otorgándole fuerza, resistencia y destreza sobrehumanas. Rogers, armado con su escudo de vibranium y vistiendo un uniforme rojo, blanco y azul, se enfrenta a las Potencias del Eje como Captain America: defensor de los inocentes y leyenda viviente de la Segunda Guerra Mundial. Hacia el final de la guerra, Rogers se queda atrapado en el hielo de forma accidental. Tiempo después, los Avengers localizan y descongelan el cuerpo de Rogers, quien se une a ellos para convertirse posteriormente en su líder. Tras los eventos traumáticos del A-Day, Rogers hace un impactante sacrificio que deja muy afectados a los Avengers.
                                            </Typography>
                                        </CardContent>
                           
                            </Hidden>
                        </CardActionArea>              
                    </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card height={500}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="IronMan"
                                    height="300"
                                    image="https://www.gamecored.com/wp-content/uploads/2019/06/Marvels-Avengers-Game-1620x800.jpg"
                                    title="IronMan"/>
                                    <Hidden smDown>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            IronMan
                                            </Typography>
                                             <Typography variant="body2" color="textSecondary" component="p">
                                             Tony Stark: multimillonario, genio, inventor y filántropo. Solía ser el fabricante de armas líder en el mundo, pero un roce con la muerte obliga a Stark a replantearse sus valores y a darse cuenta de que puede hacer un mejor uso de su talento. Como resultado, desarrolla la armadura de Iron Man y ayuda a fundar los Avengers: los héroes más poderosos de la Tierra unidos para proteger al mundo contra cualquier amenaza catastrófica. Tras los terribles acontecimientos del A-Day y la consecuente separación de los Avengers, un amargado Stark anhela volver a la acción... y la redención.
                                            </Typography>
                                        </CardContent>
                                        </Hidden>
                            </CardActionArea>
                    </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card className={classes.cards}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Thor Odinson"
                                    height="300"
                                    image="https://i2.wp.com/www.pcmrace.com/wp-content/uploads/2019/09/THORHAIR.jpg?resize=1200%2C520&ssl=1"
                                    title="Thor Odinson"/>
                                    <Hidden smDown>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            Thor 
                                            </Typography>
                                             <Typography variant="body2" color="textSecondary" component="p">
                                             Cuenta la leyenda sobre el hijo de Odín y heredero al trono de Asgard, ¡el poderoso Thor, dios del trueno! Thor se establece en la Tierra uniéndose a los Avengers, y se dedica en cuerpo y alma a proteger su nuevo hogar del mal. Con su martillo encantado, Mjolnir, Thor derrota a cualquier enemigo que amenace a sus aliados. Tras los eventos del A-Day, Thor ya no se siente digno del Mjolnir, así que lo deja atrás a cambio de una vida humilde sirviendo a la gente de la Tierra.
                                            </Typography>
                                        </CardContent>
                                        </Hidden>
                            </CardActionArea>
                    </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card className={classes.cards}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Ms. Marvel"
                                    height="300"
                                    image="https://media.vandal.net/i/1200x630/45635/marvels-avengers-20191042339432_1.jpg"
                                    title="Ms. Marvel"/>
                                    <Hidden smDown>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            Ms. Marvel
                                            </Typography>
                                             <Typography variant="body2" color="textSecondary" component="p">
                                             Kamala Khan es una astuta jovencita estadounidense de origen pakistaní con una personalidad muy optimista. Siempre busca el cambio positivo y no duda en combatir cualquier injusticia donde sea que la encuentre. Kamala lleva siendo fan de los Avengers desde pequeña. Además de creer que son geniales, los admira (en especial a la Capitana Marvel) porque representan lo mejor de la humanidad y, en un nivel mucho más profundo, la inspiran a ser la mejor versión de sí misma. Kamala se vio expuesta a la niebla de Terrigen durante el A-Day, lo que activó los genes Inhumanos aletargados en su interior y despertó su factor curativo y sus poderes polimórficos. Lleva años ocultando sus habilidades, pero pronto la aventura llamará a su puerta en Jersey City y la inspirará a convertirse en una auténtica heroína.
                                            </Typography>
                                        </CardContent>
                                        </Hidden>
                            </CardActionArea>
                    </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card className={classes.cards}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="The Hulk"
                                    height="300"
                                    image="https://www.kabukis.com/wp-content/uploads/2019/09/marvels-avengers-hulk-game-play-1280x720.jpg"
                                    title="The Hulk"/>
                                    <Hidden smDown>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            The Hulk
                                            </Typography>
                                             <Typography variant="body2" color="textSecondary" component="p">
                                             Una dosis masiva de radiación gamma transforma al brillante, aunque pacífico, científico Dr. Bruce Banner en el gigante de jade conocido como Hulk. Cuando alcanza su límite emocional, Banner se transforma en una bestia inmensa llena de furia, con una fuerza, resistencia e invulnerabilidad superhumanas. Hulk lucha constantemente con una ira descontrolada, pero es un fiel compañero en el campo de batalla. Poco después de los trágicos acontecimientos del A-Day, Bruce Banner se transforma en Hulk de forma permanente y se instala en un helitransporte abandonado en Utah para aislarse de la sociedad.
                                            </Typography>
                                        </CardContent>
                                        </Hidden>
                            </CardActionArea>
                    </Card>
                        </Grid>
                        <Grid item xs={6}>
                        <Card className={classes.cards}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Black Widow"
                                    height="300"
                                    image="https://fyre.cdn.sewest.net/trm/mediaContent/5dee283cf42027001595ca32/black-widow-headshot.jpg?width=600"
                                    title="Black Widow"/>
                                    <Hidden smDown>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            Black Widow
                                            </Typography>
                                             <Typography variant="body2" color="textSecondary" component="p">
                                             Formada desde una edad temprana en el programa secreto soviético Habitación Roja, Natasha Romanoff se convierte en Black Widow, una peligrosa superespía experta en las artes del espionaje, la subversión y el combate. Aunque fue entrenada como una asesina del gobierno, finalmente huye de sus opresores y se une a los Avengers en un intento por redimir los errores de su pasado, jurando usar sus habilidades altamente especializadas, y su clásica mordedura de viuda, para proteger a los inocentes. Tras la tragedia del A-Day, Natasha asume una identidad encubierta para ayudar a las víctimas y así intentar limpiar el nombre de los Avengers.
                                            </Typography>
                                        </CardContent>
                                        </Hidden>
                            </CardActionArea>
                    </Card>
                        </Grid>
                    </Grid>
                   
            </div>
      
    )
}


export default GOTW;