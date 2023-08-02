import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
    } from "recharts"

import {format} from 'date-fns'
    
    // const data = [
    //     {
    //     group_name: "Group A",
    //     boys: 200,
    //     girls: 400,
    //     },
    //     {
    //     group_name: "Group B",
    //     boys: 3000,
    //     girls: 500,
    //     },
    //     {
    //     group_name: "Group C",
    //     boys: 1000,
    //     girls: 1500,
    //     },
    //     {
    //     group_name: "Group D",
    //     boys: 700,
    //     girls: 1200,
    //     },
    // ]
    
    const BarCharts = (props) => {

        const {data} = props
        const convertedData = data.map(item=>{
            return {...item, date: format(new Date(item.date), 'E')}
            }
            );

        const DataFormatter = (number) => {
        if (number > 1000) {
            return `${(number / 1000).toString()}k`
        }
        return number.toString()
        }
    
        return (
        <ResponsiveContainer width="100%" height={500}>
            <BarChart
            data={convertedData}
            margin={{
                top: 5,
            }}
            >
            <XAxis
                dataKey='date'
                tick={{
                stroke: "gray",
                strokeWidth: 1,
                }}
            />
            <YAxis
                tickFormatter={DataFormatter}
                tick={{
                stroke: "gray",
                strokeWidth: 0,
                }}
            />
            <Legend
                wrapperStyle={{
                padding: 30,
                }}
            />
            <Bar dataKey="sum" name="Credit" fill="#1f77b4" barSize="20%" />
            <Bar dataKey={data.type==='debit' ? "sum" : null} name="Debit" fill="#fd7f0e" barSize="20%" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BarCharts