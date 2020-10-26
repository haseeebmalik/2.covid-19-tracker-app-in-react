import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import {fetchCountries} from '../../Api';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    formcontrol: {
        
    alignContent:'center',
    width: "100%",
    marginBottom:'30px'
    },
   
  });


const CountryPicker=({handleCountryChange})=>{
    const classes = useStyles();
    const [fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{
      const fetchCountriesApi=async()=>{
        setFetchedCountries(await fetchCountries());
      }
      fetchCountriesApi();   
    },[setFetchedCountries])
    console.log( "fetch countries",fetchedCountries);
    return(
       <div>
           <FormControl className={classes.formcontrol}>
               <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
                   <option value="global">Global</option>
                   {fetchedCountries.map((country,index)=><option key={index} value={country}>{country}</option>)}
               </NativeSelect>
           </FormControl>
           
       </div>
    )

}
export default CountryPicker;