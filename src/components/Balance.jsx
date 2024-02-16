import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
/* import { PieChart } from '@mui/x-charts/PieChart'; */



const API_URL = "http://localhost:3000/entries"; 

function Balance() {

    const [allValues, setAllValues] = useState(0);
    const [data, setData] = useState([]);

// THIS DATA AS AN EXAMPLE WORKS
     /* let data = [
        { id: 0, value: 10, label: 'series A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ]  */

    
    
    useEffect(() => {
        let total = 0;
        axios.get(API_URL)
            .then(response => {    
                for (let i=0;i<response.data.length;i++){
                    total += response.data[i].value
                }
                setAllValues(total);
               /*  let newArr = []; */
                /* const newData =(response.data).map((entry)=>{
                    return(
                         {
                            id: entry.id,
                            value: entry.value,
                            label: entry.category
                        }
                    )
                }) */
                /* newArr.push(newData)
                setData(data.push(newData)) */
                /* setData(prevData => [...prevData, ...newData]);
                console.log(data) */
            })
            .catch(error => {
            console.error('Error fetching expenses:', error);
            });
    }, []); 
  
    return (
    <section>

        <section>
            <h1>Current Balance: {allValues} €</h1>
        </section>

       {/*  <section style={{height: "400px", width:"400px"}}>
            <PieChart
                 series={[
                {
                data: [...data],
                innerRadius: 30,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -90,
                endAngle: 180,
                cx: 150,
                cy: 150,
                }]}
            />
        </section> */}
    </section>
  )
}

export default Balance;