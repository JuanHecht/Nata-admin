/* import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import '../app.css'
import { PieChart } from '@mui/x-charts/PieChart';



const API_URL = "http://localhost:3000/entries"; 

function Balance() {

    const [allValues, setAllValues] = useState(0);
    const [data, setData] = useState([]);


    
    
    useEffect(() => {
        let total = 0;
        axios.get(API_URL)
            .then(response => {    
                for (let i=0;i<response.data.length;i++){
                    total += response.data[i].value
                }
                setAllValues(total);
                // ------------------------------------------
                let newArr = []; 

                const newData =(response.data).map((entry)=>{
                    return(
                         {
                             id: entry.id,
                            value: entry.value,
                            label: entry.category 
                            }
                    )}
                    )
                })
                newArr.push(newData)
                setData(data.push(newData)) 
                setData(prevData => [...prevData, ...newData]);
                console.log(data)
                // ------------------------------------------------
                })
            .catch(error => {
            console.error('Error fetching expenses:', error);
            }); 


           
    }, []); 
  
    return (
    <section>

        <section className='balanceLine'>
            <h1 className='balanceText'>Current Balance: </h1><h1 className='balanceValue' style={{color: allValues < 0 ? 'rgb(174, 0, 0)' : 'rgb(6, 90, 6)'}}>{allValues} €</h1>
        </section>

        <section style={{height: "400px", width:"400px"}}>
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
        </section>
    </section>
  )
}

export default Balance; */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart } from '@mui/x-charts/PieChart';

const API_URL = "http://localhost:3000/entries";

function Balance() {
    const [allValues, setAllValues] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(API_URL)
            .then(response => {
                const categoryValues = {}; // Object to store accumulated values for each category
                let total = 0;

                response.data.forEach(entry => {
                    const category = entry.category;
                    const value = Math.abs(entry.value);

                    // Accumulate values for each category
                    if (categoryValues[category]) {
                        categoryValues[category] += value;
                    } else {
                        categoryValues[category] = value;
                    }

                    total += value;
                });

                // Format data from accumulated values
                const formattedData = Object.keys(categoryValues).map(category => ({
                    label: category,
                    value: categoryValues[category],
                }));

                setAllValues(total);
                setData(formattedData);
            })
            .catch(error => {
                console.error('Error fetching expenses:', error);
            });
    }, []);

    return (
        <section>
            <section className='balanceLine'>
                <h1 className='balanceText'>Current Balance: </h1>
                <h1 className='balanceValue' style={{ color: allValues < 0 ? 'rgb(174, 0, 0)' : 'rgb(6, 90, 6)' }}>
                    {allValues} €
                </h1>
            </section>

            <section style={{ height: "400px", width: "400px" }}>
                <PieChart
                    series={[
                        {
                            data: data,
                            innerRadius: 30,
                            outerRadius: 100,
                            paddingAngle: 2,
                            cornerRadius: 5,
                            startAngle: -180,
                            endAngle: 180,
                            cx: 150,
                            cy: 195,
                        }
                    ]}
                />
            </section>
        </section>
    );
}

export default Balance;
