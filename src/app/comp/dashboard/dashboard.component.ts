import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  myChart: any;
constructor(){}
d1: any =122
  ngOnInit(): void {
    // Get the canvas element
    const canvas: any = document.getElementById('pieChart');

    // Get the 2D context of the canvas
    const ctx = canvas.getContext('2d');
  

    // Create a chart
    const myChart = new Chart(ctx, {
      type: 'bar',  // Specify the chart type (bar, line, pie, etc.)
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3','Week 4', 'Week 5','Week 6', 'Week 7', 'Week 8','Week 9', 'Week 10','Week 11'],
        datasets: [
          {
            label: 'Software House A',
            data: [111,19,2,88,35, 50, 70,30,99,2,88,35,],
            backgroundColor: '#B9B4C7', // Background color for bars in Dataset 1
            borderColor: '#f87e0e', // Border color for bars in Dataset 1
            borderWidth: 1
          },
          {
            label: 'Software House B',
            data: [30,99,12,88,35,40,88,35, 50,60, 80],
            backgroundColor: '#5C5470', // Background color for bars in Dataset 2
            borderColor: '#f87e0e', // Border color for bars in Dataset 2
            borderWidth: 1
          }
        ]
      }
    });

    // ///////////////////////////////////////////////////////////
    const canvas2: any = document.getElementById('pieChart2');

    // Get the 2D context of the canvas
    const ctx2 = canvas2.getContext('2d');

    // Create a chart
    const myChart2 = new Chart(ctx2, {
      type: 'line',  // Specify the chart type (bar, line, pie, etc.)
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3','Week 4', 'Week 5','Week 6', 'Week 7', 'Week 8','Week 9', 'Week 10','Week 11'],
        datasets: [
          {
            label: 'Software House A',
            data: [30,99,2,88,35, 50, 70,30,99,2,88,35,],
            backgroundColor: '#B9B4C7', // Background color for bars in Dataset 1
            borderColor: '#f87e0e', // Border color for bars in Dataset 1
            borderWidth: 1
          },
          // {
          //   label: 'Software House B',
          //   data: [0,77,12,98,35,40,88,35, 50,60, 80],
          //   backgroundColor: '#5C5470', 
          //   borderColor: '#f87e0e', 
          //   borderWidth: 1
          // }
        ]
      }
    });
  }


  // RenderChart(){
  //   const ctx = document.getElementById('pieChart');

  // const myChart=new Chart("pieChart", {
  //   type: 'bar',
  //   data: {
  //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //     datasets: [{
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });

  // }
 
}
