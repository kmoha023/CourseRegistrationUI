import { Component, OnInit } from '@angular/core';
import {Course} from './course';
import {CoursedetailsComponent} from './coursedetails.component';


@Component({
  selector: 'cr-courselist',
  template: `
  <h4>Available Courses</h4>
<div class="row">
  				<div class="col-md-5 col-lg-5 col-sm-5 col-xs-5">
	    			<div class="list-group" *ngFor="let course of courses">
	    			      <a href="#" class="list-group-item" (click)="courseClicked=course">
					        <span class="badge">{{course?.availableSeats}}</span>
					        {{course?.name}}
					      </a>
	    			</div>
						</div>
				<div class="col-md-7 col-lg-7 col-sm-7 col-xs-7" *ngIf="courseClicked !=null">
						<cr-coursedetails [inputSelectedCourse]="courseClicked"></cr-coursedetails>
						</div>
				</div>
				

  `,
  styles: []
})
export class CourselistComponent implements OnInit {

	courseClicked:Course;

  courses:Array<Course> = [
  new Course("1","Java1","How to Program","Paul Dettel-Harvey Dattel",true,"./assets/images/java.jpg",10,2),
  new Course("2","Java2","Advanced Programming in Java","Noel Kalicharan",true,"./assets/images/java2.jpg",45,3),
  new Course("1","JSF","Java Server Faces in Action","Kita Mon",true,"./assets/images/jsf.jpg",15,4),
	new Course("1","Servlet","Java Servlet Programming","Chris",true,"./assets/images/servlet.jpg",13,4),
	new Course("1","Spring","Spring in Action","Craig Walls",true,"./assets/images/spring.jpg",12,5),
];
  constructor() { }

  ngOnInit() {
  }

	
}
