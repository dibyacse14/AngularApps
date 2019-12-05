import { Injectable } from '@angular/core';
import { Assignment } from '../assignment/assignment.model';
import { Observable ,of} from 'rxjs';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments : Assignment[] = [
    {
      name:"java",
      dueDate: new Date("12-3-2019"),
      submitted:true
      
    },
    {
      name:"spring",
      dueDate: new Date("12-3-2019"),
      submitted:false
    }
  ]
  constructor(private loggingService : LoggingService) { }
  getAssignments():Observable<Assignment[]>{
    return of(this.assignments);
  }

  addAssignments(assignment : Assignment):Observable<string>{
    this.assignments.push(assignment);
    this.loggingService.log(assignment.name,'Added')
    return of('Assignment Added');
  }

  updateAssignment(assignment:Assignment):Observable<string>{
    this.assignments.forEach((assignment,i) => {
      if(assignment === assignment){
        this.assignments[i] = assignment;
      }
    });
    this.loggingService.log(assignment.name,'updated')
    return of('assignment updated');
  }

  deleteAssignment(deletedAssignment:Assignment):Observable<string>{
    this.assignments.forEach((assignment,i) => {
      if(assignment === deletedAssignment){
        this.assignments.slice(i,1);
      }
    });
    this.loggingService.log(deletedAssignment.name,'deleted')
    return of('assignment deleted');
  }
}
