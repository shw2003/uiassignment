import regionalData from "./data.json";
import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

let labels = regionalData.map((el) => el["Region Arms Sales Dashboard"]);
// console.log(labels);
let numbers = regionalData.map((el) =>
  el.Notifications.match(/[0-9]/g).join("")
);
console.log(numbers);

const state = {
  labels,
  datasets: [
    {
      label: "Arm Sales",
      data: numbers,
      backgroundColor: ["#F54EA2", "#41b6e6", "#FE9000", "#7ebc59", "#8134af"],
      hoverBackgroundColor: [
        "#b9006e",
        "#005792",
        "#C1292E",
        "#2b9464",
        "#42218E",
      ],
    },
  ],
};
export default class App extends React.Component {
  render() {
    const formatNumber = (num) => {
      return num.toString("").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (
      <div>
        <Pie
          data={state}
          // width={300}
          // height={300}
          options={{
            title: {
              display: true,
              text: "Arm Sales Notifications by Region",
              fontSize: 25,
            },
            // responsive: true,
            legend: {
              display: true,
              position: "bottom",
              labels: {
                fontSize: 20, //labels font size
                fontColor: "#000",
              },
            },
            plugins: {
              datalabels: {
                font: {
                  size: 300,
                },
              },
            },
            tooltips: {
              bodyFontSize: 20,
              callbacks: {
                label: function (tooltipItem, data) {
                  // console.log({ tooltipItem, data });
                  const label = data.labels[tooltipItem.index]; //index gives the the index of this data item in the dataset
                  // console.log(data.labels[2])
                  const value = formatNumber(
                    data.datasets[tooltipItem.datasetIndex].data[
                      tooltipItem.index
                    ] //finding the matching data item in dataset
                  );

                  return `${label}: $${value}`;
                },
              },
            },
          }}
        />
      </div>
    );
  }
}
