import React,{useState,useEffect} from 'react';
import {fetchData} from '../../Api';
import {Line,Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import styles from './Charts.Module.css';
import { makeStyles } from '@material-ui/core/styles';
import cx from 'classnames';



const useStyles = makeStyles({
    container: {
        display: "flex",
    justifycontent: "center",
    width: "60%",
    height:'40vh',
    marginBottom:'30px',
    
     
    }
  });




const Chart=({data,country})=>{
    const [dailyData,setDailyData]=useState({})
    const classes = useStyles();
    
    useEffect(() => {
        const fetchAPI = async () => {
          setDailyData(await fetchData());
        };
    
        fetchAPI();
      }, []);
       console.log("data in chartjs",dailyData);
       //const {dailyData:{confirmed,recovered,deaths,lastUpdate}}
    
   /* useEffect(()=>{
        const FetchApi= async()=>{
            //setDailyData(await FetchDailyData())
            //const dailyData=await FetchDailyData();
             setDailyData(await FetchDailyData());
             console.log("console in chartjs",dailyData);
           
        }
        
         FetchApi();
        
         
    },[])
    */


    /*
   const lineChat = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;*/
 
  if(!dailyData.confirmed){
    return null;
}
    
 const data1 =  {
	labels: [
		'confirmed',
		'recovered',
		'deaths'
	],
	datasets: [{
        data: [dailyData.confirmed.value,dailyData.recovered.value,dailyData.deaths.value],
        
		backgroundColor: [
		//'blue',
        'rgba(0,0,255,0.5)',
        //'green',
        'rgba(0, 255, 0, 0.5)',
        //'red'
        'rgba(255, 0, 0, 0.5)'
        
		],
		hoverBackgroundColor: [
		'blue',
		'green',
		'red'
		]
    }]
    
};


  const barChart=(
      data.confirmed ?(
          <Bar 
            data={{
               labels:['Confirmed','Recovered','Deaths'],
               datasets:[{
                   label:'people',
                   backgroundColor:[
                    'rgba(0,0,255,0.5)',
                    'rgba(0, 255, 0, 0.5)',
                    'rgba(255, 0, 0, 0.5)'
                   ],
                   data:[data.confirmed.value,data.recovered.value,data.deaths.value]
               }]
            }}
            options={{
                legend:{display:false},
                responsive:true,
                maintainAspectRatio:false,
                title:{display:true ,text:`Current state of ${country}`},
            }}
          />
      ):null
  );

  
    console.log("aaaaaa",dailyData.confirmed.value);
    return(
       <div className={cx(classes.container,styles.container)}>
          { country!="global" ?barChart:<Doughnut data={data1} options={{
                legend:{display:false},
                responsive:true,
                maintainAspectRatio:false,
                title:{display:true ,text:`Current state of ${country}`},
}}/>}
       </div>
    )

}
export default Chart;