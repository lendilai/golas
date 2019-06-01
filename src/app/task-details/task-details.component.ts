import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal'

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input() goal:Goal;
  @Output() isDone = new EventEmitter<boolean>();

  deleteGoal(complete: boolean){
    this.isDone.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
