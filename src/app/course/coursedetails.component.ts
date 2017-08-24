import { Component, OnInit, Input } from '@angular/core';
import {Course} from './course';
@Component({
  selector: 'cr-coursedetails',
  template: `
    		<div class="media">
						  <div class="media-left">
						    <a href="#">
						      <img class="media-object" src={{inputSelectedCourse?.Image}} alt="" height="200" width="200">
						    </a>
              </div>
					 <div class="media-body">
						    <h4 class="media-heading">{{inputSelectedCourse?.name}}</h4>
						    Description:{{inputSelectedCourse?.Description}} <br/>
						    Instructor:{{inputSelectedCourse?.instructor}} <br/>
						    Available:{{inputSelectedCourse?.availableSeats}} <br/>
						    Credits: {{inputSelectedCourse?.credit}} 
					 </div>
			</div>
  `,
  styles: []
})
export class CoursedetailsComponent implements OnInit {

  @Input()
  inputSelectedCourse:Course;

  constructor() { }

  ngOnInit() {
  }

}
