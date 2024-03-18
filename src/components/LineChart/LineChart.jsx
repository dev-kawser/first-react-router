import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentMarks = [
        { id: 1, name: 'Alice', math: 85, physics: 78, chemistry: 92 },
        { id: 2, name: 'Bob', math: 78, physics: 82, chemistry: 88 },
        { id: 3, name: 'Charlie', math: 92, physics: 88, chemistry: 95 },
        { id: 4, name: 'David', math: 80, physics: 75, chemistry: 84 },
        { id: 5, name: 'Eva', math: 88, physics: 85, chemistry: 90 },
        { id: 6, name: 'Frank', math: 75, physics: 68, chemistry: 72 },
        { id: 7, name: 'Grace', math: 91, physics: 90, chemistry: 94 },
        { id: 8, name: 'Henry', math: 84, physics: 79, chemistry: 87 },
        { id: 9, name: 'Ivy', math: 79, physics: 72, chemistry: 78 },
        { id: 10, name: 'Jack', math: 87, physics: 84, chemistry: 89 }
      ];
      
      


    return (
        <div>
            <LChart className='my-10' width={800} height={400} data={studentMarks} >
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line stroke='red' dataKey="math"></Line>
                <Line stroke='blue' dataKey="physics"></Line>
                <Line stroke='green' dataKey="chemistry"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;