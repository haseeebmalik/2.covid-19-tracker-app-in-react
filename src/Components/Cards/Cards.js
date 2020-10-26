import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.Module.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CountUp from 'react-countup';
import cx from 'classnames';
import CircularIndeterminate from './CircularIndeterminate';


const useStyles = makeStyles({
   
    

    container: {
        margin: '50px 0',
    },
    card: {
        margin: '2% 2%',
       
    
    },
    infected: {
        borderBottom: "10px solid rgba(0,0,255,0.5)",
    },
    recovered: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
    },
    deaths: {
        borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
    }
  });
 
const Cards=({data:{confirmed,recovered,lastUpdate,deaths}})=>{
    const classes = useStyles();
    if(!confirmed){

        return (
        <div>
        <br />
        <br />
        <br/>
        <CircularIndeterminate />
        <br/>
        <br/>
        </div>
        );
        
        
    }
    
    

    
    return(
       <div className={classes.container} >
           <Grid container spacing={3} justify="center">
               <Grid item component={Card} xs={12} md={3} className={cx(classes.card,classes.infected)} >
                   <CardContent  >
                       <Typography color="textSecondary" gutterBottom>
                            Infected
                       </Typography>
                       <Typography varient="h5">
                           <CountUp 
                             start={0}
                             end={confirmed.value}
                             duration={2.5}
                             separator=","

                           />
                       </Typography>
                       <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography varient="body2">
                          Total No. of positive cases of Covid-19
                       </Typography>
                   </CardContent>

               </Grid>

               <Grid item component={Card} xs={12} md={3} className={cx(classes.card,classes.recovered)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>
                            Recovered
                       </Typography>
                       <Typography varient="h5">
                       <CountUp 
                             start={0}
                             end={recovered.value}
                             duration={2.5}
                             separator=","

                           />
                       </Typography>
                       <Typography color="textSecondary">
                           {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography varient="body2">
                           No. of Recovered cases on Covid-19
                       </Typography>
                   </CardContent>

               </Grid>
               <Grid item component={Card} xs={12} md={3} className={cx(classes.card,classes.deaths)}>
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom>
                            Deaths
                       </Typography>
                       <Typography varient="h5">
                       <CountUp 
                             start={0}
                             end={deaths.value}
                             duration={2.5}
                             separator=","

                           />
                       </Typography>
                       <Typography color="textSecondary">
                          {new Date(lastUpdate).toDateString()}
                       </Typography>
                       <Typography varient="body2">
                           No. of Deaths due to Covid-19
                       </Typography>
                   </CardContent>

               </Grid>

           </Grid>
     
       </div>
    );

}
export default Cards;