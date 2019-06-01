export class Goal {
  constructor(public id:number, public name:string, public desc:string, public completeDate:Date){
    this.showDesc=false;
  }
}
