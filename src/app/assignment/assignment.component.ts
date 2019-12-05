import { Component, OnInit } from '@angular/core';
import {Assignment} from './assignment.model'
import { AssignmentsService } from '../shared/assignments.service';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  title = "Hi Assignment component";

  enabled = false;
  
  selectedAssignment : Assignment;
  formVisible = false;

  assignments : Assignment[];



  constructor(private assignmentService: AssignmentsService) { }

  ngOnInit() {
    //this.assignments = this.assignmentService.getAssignments();
    this.getAssignments();
  }
  getAssignments(){
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments);
  }

  onSelect(assignment: Assignment){
    this.selectedAssignment = assignment;
  }
  onAddBtnClick(){
    this.formVisible = true;
    this.selectedAssignment = null;
  }

  onNewAssignment(event:Assignment){
    this.assignmentService.addAssignments(event)
    .subscribe(success => console.log(success));

    this.formVisible = false;
  }
}
