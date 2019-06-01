import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();// for current date n' time

    let todayWithoutTime:any = new Date(today.getFullYear(),today.getMonth(), today.getDate());

    var dateDif = Math.abs(value-todayWithoutTime)// value will be in milliseconds
    const secondsInADay = 86400;

    var dateDifSeconds = dateDif*0.001; //convert date dif to seconds

    var dateCounter = dateDifSeconds/secondsInADay;

    if(dateCounter >= 1 && value > todayWithoutTime){
      return dateCounter;
    } else {
      return 0;
    }
  }

}
