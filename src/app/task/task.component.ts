import { Component, OnInit } from '@angular/core';
import { Goal } from "../goal"

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  goals = [
    new Goal(1, "Watch Endgame", "At Imax",new Date(2020,3,8)),
    new Goal(2, "Complete Project", "At home",new Date(2019,5,2)),
    new Goal(3, "Watch tutorial", "On youtube",new Date(2018,3,4)),
    new Goal(4, "Take a nap", "At 10pm",new Date(2019,7,15)),
  ]
  doneGoal(isDone, index){
    if(isDone){
      this.goals.splice(index, 1);
    }
  }
  toggle(index){
    this.goals[index].showDesc = !this.goals[index].showDesc;
  }
  addNew(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.unshift(goal);
  }

  constructor() { }

  ngOnInit() {
  }

}
