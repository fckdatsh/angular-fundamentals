import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HomeComponent,
    CourseListComponent,
    CourseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // ngModel -> error
    //error NG8002: Can't bind to 'ngModel' since it isn't a known property of 'input'.
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
