import React from 'react';
import { Line } from 'react-chartjs-2';
import './styles/Blank.scss';
import { CountryRenewableElectricity } from './linechart.tsx';

const Blank = () => {
  const data = new CountryRenewableElectricity(); // Initialize the data

  return (
    <div className="container">
      <div className="panel">
        <div className="chart-container">
          <Line
            data={{
              labels: data.map(item => item.year),
              datasets: [
                {
                  label: 'Europe',
                  data: data.map(item => item.europe),
                  borderColor: 'red',
                },
                {
                  label: 'China',
                  data: data.map(item => item.china),
                  borderColor: 'blue',
                },
                {
                  label: 'America',
                  data: data.map(item => item.america),
                  borderColor: 'green',
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Renewable Electricity by Year',
                },
                datalabels: {
                  display: true,
                  color: 'black',
                },
              },
            }}
          />
        </div>
      </div>
      <div className="panel">
        <h2>Panel 2</h2>
        <p>Content for panel 2 goes here.</p>
      </div>
    </div>
  );
};

export default Blank;
