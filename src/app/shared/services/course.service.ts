import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Course } from 'src/app/models/course/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  // inject http module
  URL_BASE = 'http://localhost:3000/';
  model = 'courses';
  // courses: Course[] = [
  //   {
  //     id: 1,
  //     title: 'Angular Fundamentals',
  //     description: 'Learn the fundamentals of Angular',
  //     percentComplete: 22,
  //     favorite: true,
  //   },
  //   {
  //     id: 2,
  //     title: 'React Fundamentals',
  //     description: 'Learn the fundamentals of React',
  //     percentComplete: 0,
  //     favorite: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Vue Fundamentals',
  //     description: 'Learn the fundamentals of Vue',
  //     percentComplete: 22,
  //     favorite: true,
  //   },
  //   {
  //     id: 4,
  //     title: 'Svelte Fundamentals',
  //     description: 'Learn the fundamentals of Svelte',
  //     percentComplete: 22,
  //     favorite: false,
  //   },
  // ]
  constructor(private http: HttpClient) { }
  all = () => {
    return this.http.get(this.getUrl())
    // return this.courses;
  }
  get =(courseId: number): Observable<Object> => {
    return this.http.get(this.getUrlById(courseId));
    // const courseFiltered = this.courses.filter((course: Course)=> course.id === courseId);
    // return courseFiltered.length ? courseFiltered[0] : null;
  }
  create = (course: Course) => {
    return this.http.post(this.getUrl(), course);
    // this.courses.push(course);
    // return this.courses;
  }
  update = (course: Course) => {
    return this.http.put(this.getUrlById(course.id), course);
    // this.courses = this.courses.map((element: Course) => element.id === course.id ? course : element);
    // return this.courses;
  }
  delete = (courseId: number) => {
    return this.http.delete(this.getUrlById(courseId));
    // this.courses = this.courses.filter((course: Course)=> course.id !== courseId);
    // return this.courses;
  }
  getUrl = () => {
    return `${this.URL_BASE}${this.model}`;
  }
  getUrlById = (id: number) => {
    return `${this.URL_BASE}${this.model}/${id}`;
  }
}
