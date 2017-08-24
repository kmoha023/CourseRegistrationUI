import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourselistComponent } from './courselist.component';
import { CoursedetailsComponent } from './coursedetails.component';



@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CourselistComponent,
    CoursedetailsComponent
  ],
  declarations: [CourselistComponent, CoursedetailsComponent]
})
export class CourseModule { }
