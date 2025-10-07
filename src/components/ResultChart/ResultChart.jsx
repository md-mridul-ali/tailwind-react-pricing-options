
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

//10 students data for making result chart
const resultData = [
    {
        "id": 1,
        "name": "Aarav Khan",
        "physics": 82,
        "chemistry": 76,
        "math": 89
    },
    {
        "id": 2,
        "name": "Meera Das",
        "physics": 91,
        "chemistry": 88,
        "math": 95
    },
    {
        "id": 3,
        "name": "Rafiul Islam",
        "physics": 68,
        "chemistry": 74,
        "math": 71
    },
    {
        "id": 4,
        "name": "Nisha Roy",
        "physics": 79,
        "chemistry": 81,
        "math": 85
    },
    {
        "id": 5,
        "name": "Adnan Chowdhury",
        "physics": 93,
        "chemistry": 89,
        "math": 97
    },
    {
        "id": 6,
        "name": "Tania Rahman",
        "physics": 84,
        "chemistry": 77,
        "math": 88
    },
    {
        "id": 7,
        "name": "Samiul Ahmed",
        "physics": 72,
        "chemistry": 69,
        "math": 75
    },
    {
        "id": 8,
        "name": "Priya Saha",
        "physics": 88,
        "chemistry": 91,
        "math": 92
    },
    {
        "id": 9,
        "name": "Jahid Hasan",
        "physics": 65,
        "chemistry": 71,
        "math": 68
    },
    {
        "id": 10,
        "name": "Moumita Akter",
        "physics": 90,
        "chemistry": 85,
        "math": 94
    }
]


const ResultChart = () => {
    return (
        <div className='mt-10'>
            <LineChart width={500} height={500} data={resultData}>
                {/* define axis,, axis er ki thakbe sheyta bole dite hobe
               ,,,"dataKey" bole dite hobe*/}
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                {/* create chart  */}
                <Line dataKey="math"></Line>
                {/* stroke: chart er color define korbe */}
                <Line dataKey={'chemistry'} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;