import { Component, OnInit } from '@angular/core';
import {Assignment} from './assignment.model'


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  title = "Hi Assignment component";

  enabled = false;
  name : string;
  dueDate : Date;

  constructor() { }

  ngOnInit() {
    setTimeout(
        () => {
          this.enabled = true;
        },2000)
  }
  assignments : Assignment[] = [
    {
      name:"java",
      dueDate: new Date("12-3-2019"),
      submitted:true
      
    },
    {
      name:"spring",
      dueDate: new Date("12-3-2019"),
      submitted:true
    }
  ]

  onAdd(){
    const assignment = new Assignment();
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = false;

    this.assignments.push(assignment);
  }

}
