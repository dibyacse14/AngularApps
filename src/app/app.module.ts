import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatListModule, MatDividerModule, MatCardModule, MatCheckboxModule } from '@angular/material';
import { SubmittedDirective } from './shared/submitted.directive';
import { UnSubmittedDirective } from './shared/un-submitted.directive';
import { FormsModule } from '@angular/forms';
import { AssignmentDetailsComponent } from './assignment/assignment-details/assignment-details.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentsService } from './shared/assignments.service';
@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    SubmittedDirective,
    UnSubmittedDirective,
    AssignmentDetailsComponent,
    AddAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule
  ],
  providers: [AssignmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
