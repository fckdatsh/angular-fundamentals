import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course/Course';
import { CourseService } from '../shared/services/course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  currentCourse: Course;
  courses: Course[];
  constructor(private courseService: CourseService) {}
  //Lifecycle -> ngOnInit, ngOnChanges, ngOnDestroy //
  ngOnInit(): void {
    this.refreshCourses();
  }
  // Directives -ngIf/ngFor- //
  selectCourse = (course) => (this.currentCourse = course);
  loadCourses = () => this.courseService.all().subscribe((courses: Course[]) => this.courses = courses);
  refreshCourses = () => {
    debugger
    this.resetSelectedCourse();
    this.loadCourses()
  }
  // template-forms //
  resetSelectedCourse = () => {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };
    this.currentCourse = emptyCourse;
  };

  cancel = () => {
    this.resetSelectedCourse();
  }
  saveCourse = (course: Course) => {
    debugger
    if(course.id){
      this.courseService.update(course).subscribe(res => this.loadCourses());
    }else{
      this.courseService.create(course).subscribe(res => this.loadCourses());
    }
  }
  deleteCourse = (course: Course) => {
    this.courseService.delete(course.id).subscribe(res => this.refreshCourses());
  }
}
