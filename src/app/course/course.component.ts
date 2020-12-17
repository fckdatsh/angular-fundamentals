import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course/Course';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  currentCourse: Course;
  courses = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      description: 'Learn the fundamentals of Angular',
      percentComplete: 22,
      favorite: true,
    },
    {
      id: 2,
      title: 'React Fundamentals',
      description: 'Learn the fundamentals of React',
      percentComplete: 0,
      favorite: false,
    },
    {
      id: 3,
      title: 'Vue Fundamentals',
      description: 'Learn the fundamentals of Vue',
      percentComplete: 22,
      favorite: true,
    },
    {
      id: 4,
      title: 'Svelte Fundamentals',
      description: 'Learn the fundamentals of Svelte',
      percentComplete: 22,
      favorite: false,
    },
  ];
  constructor() {}
  //Lifecycle -> ngOnInit, ngOnChanges, ngOnDestroy //
  ngOnInit(): void {
    this.resetSelectedCourse();
  }
  // Directives -ngIf/ngFor- //
  selectCourse = (course) => (this.currentCourse = course);

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
  saveCourse = () => {
    console.log('Course Saved!')
  }
}
