import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Assignment } from '../assignment/assignment.model';
import { AssignmentsService } from '../shared/assignments.service';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  @Output() newAssignments = new EventEmitter<Assignment>();

  name : string;
  dueDate : Date;
  // enabled = false;
  
  constructor(private assignmentService: AssignmentsService) { }

  ngOnInit() {
    // setTimeout(
    //   () => {
    //     this.enabled = true;
    //   },2000)
  }
  onAdd(){
    const assignment = new Assignment();
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = false;

    this.newAssignments.emit(assignment);
  }
}
