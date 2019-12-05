import { Component, OnInit, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';

@Component({
  selector: 'app-assignment-details',
  templateUrl: './assignment-details.component.html',
  styleUrls: ['./assignment-details.component.css']
})
export class AssignmentDetailsComponent implements OnInit {

  @Input() passedAssignment :Assignment;
  constructor(private assignmentService : AssignmentsService) { }

  ngOnInit() {
  }
  onAssignmentSubmitted(){
    this.passedAssignment.submitted=true;

    this.assignmentService.updateAssignment(this.passedAssignment)
    .subscribe(res => console.log(res));
  }

  onDelete(){
    this.assignmentService.deleteAssignment(this.passedAssignment)
    .subscribe(res => console.log(res));

    this.passedAssignment = null;
  }

}
