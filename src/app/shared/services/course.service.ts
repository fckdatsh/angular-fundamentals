import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  // inject http module
  courses: Course[] = [
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
  ]
  constructor() { }
  all = () => {
    return this.courses;
  }
  get =(courseId: number): Course | null => {
    const courseFiltered = this.courses.filter((course: Course)=> course.id === courseId);
    return courseFiltered.length ? courseFiltered[0] : null;
  }
  create = (course: Course) => {
    this.courses.push(course);
    return this.courses;
  }
  update = (course: Course) => {
    this.courses = this.courses.map((element: Course) => element.id === course.id ? course : element);
    return this.courses;
  }
  delete = (courseId: number) => {
    this.courses = this.courses.filter((course: Course)=> course.id !== courseId);
    return this.courses;
  }
}
