import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from "../goal";

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  newGoal = new Goal(0, "", "", new Date());
  @Output() addGoal = new EventEmitter<Goal>();

  submit(){
    this.addGoal.emit(this.newGoal);
  }

  constructor() { }

  ngOnInit() {
  }

}
