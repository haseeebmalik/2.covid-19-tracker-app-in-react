import React,{useState} from 'react';
import axios from 'axios';
const url='https://covid19.mathdro.id/api';

 export const fetchData= async (country)=>{
        let changeableUrl=url;
       if(country){
           changeableUrl=(`${url}/countries/${country}`);
       }
       if(country=="global"){
           changeableUrl=url;
       }
     try{
         const {data:{confirmed,recovered,deaths,lastUpdate}}=await axios.get(changeableUrl);
         return {confirmed,recovered,deaths,lastUpdate};
     }
     catch(error){
       console.log(error)
     }

}

export const fetchDailyData = async()=>{
    
   
    try{
        const date=Date.now();
        console.log("timestamp of now",date);
        const time=new Date(date);
        const toMon=time.getMonth()+1;
        console.log("month",toMon);
        const toDate=time.getDate()-1;
        console.log("date",toDate);
        const toYear=time.getFullYear();
        console.log("year",toYear);
        const d=`${toMon}-${toDate}-${toYear}`;
        console.log("d",d);
        const {data}=await axios.get(`${url}/daily`);
        const modifyData=data.map((dailyData)=>({
            confirmed: dailyData.confirmed,
            deaths: dailyData.deaths,
            date: dailyData.lastUpdate,
        }))
        console.log("modify",modifyData)
        return modifyData;
    
        
    }
    catch(error){
       console.log(error);
    }
}


export const fetchCountries= async ()=>{
    try{
        const {data:{countries}}=await axios.get(`${url}/countries/`);
        
        return countries.map((country)=>country.name);
    }
    catch(error){
      console.log(error);
    }

}