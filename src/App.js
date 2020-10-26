import React from 'react';

import styles from './App.module.css';
import {Cards,Chart,CountryPicker} from './Components';
import {fetchData} from './Api';
import coronaImage from './images/coronaimage.png';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';

class App extends React.Component{
   state={
     data:{},
     country: 'global',
     
  }
  
  async componentDidMount(){
    const fetchedData=await fetchData(this.state.country);
    
    this.setState({data:fetchedData});
    
  }
  handleCountryChange=async(country)=>{
    //fetch the data
    const fetchedData=await fetchData(country);
    console.log(fetchedData);
    
    
    //set the state
    this.setState({data:fetchedData,country:country});
    console.log(country);
  }
  render(){
    const {data,country}=this.state;
    
   
    
    return(
      
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="covid-19"/>
        <Cards data={data}/>
        
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart  data={data} country={country} />
            <h1>.  .  .</h1>
        <Grid container spacing={3}  className={styles.footer}>
          
          <Grid item xs={12} md={12} sm={12}   >
             <div><h3> Please contact us at :</h3>
               <br />
               <h1><a href="https://web.facebook.com/malik.haseeb.35110/" target="_blank">FACEBOOK</a></h1>
               <br />
               <h2>Contact Number : 03485036069</h2>
         
               @Coppy Right reserved by Cloud 7.inc
             </div>
          </Grid>
          
        </Grid>
        

        
        
      </div>
    )
  }
}

export default App;
