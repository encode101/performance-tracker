import { Component, OnInit, destroyPlatform } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CommonService } from 'src/app/shared/common-service/common.service';

@Component({
  selector: 'app-view-all-reviews',
  templateUrl: './view-all-reviews.component.html',
  styleUrls: ['./view-all-reviews.component.css'],
})
export class ViewAllReviewsComponent implements OnInit {
  //Highcharts: typeof Highcharts = Highcharts;

  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    title: {
      text: 'Performance over time',
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: 'Ratings Out Of 10 Points Per Review',
      },
    },
    series: [
      {
        name: 'HTML',
        data: [
          [1692627910000, 5],
          [1692627910000, 5],
          [1697898310000, 7],
          [1700576710000, 9],
          [1703168710000, 5],
          [1705847110000, 7],
          [1708525510000, 4],
          [1711031110000, 2],
          [1713709510000, 6],
          [1716301510000, 4],
          [1718979910000, 8],
          [1721571910000, 8],
          [1724250310000, 6],
        ],
        type: 'spline',
      },
      {
        name: 'CSS',
        data: [
          [1692627910000, 3],
          [1692627910000, 7],
          [1697898310000, 3],
          [1700576710000, 9],
          [1703168710000, 7],
          [1705847110000, 8],
          [1708525510000, 4],
          [1711031110000, 9],
          [1713709510000, 1],
          [1716301510000, 3],
          [1718979910000, 2],
          [1721571910000, 3],
          [1724250310000, 1],
        ],
        type: 'spline',
      },
    ],
  };

  constructor(public cs: CommonService) {}

  ngOnDestroy() {
    console.log('Destroying....');
  }

  ngOnInit(): void {
    this.cs.getReviews().subscribe((data: any) => {
      // this.data = data;
      // this.chartOptions.series = this.data;
      // Highcharts.setOptions({
      //   series: this.data,
      // });
      // this.chartCallback;
      // console.log(Highcharts.charts[0]);
    });
  }
}
