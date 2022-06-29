import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";

@Component({

  templateUrl: './courses-info.component.html'
})

export class CoursesInfoComponent implements OnInit {

  course: Course | undefined;

  constructor(private activedRouter: ActivatedRoute,  private courseService: CourseService){

  }

  ngOnInit(): void {
      this.course = this.courseService.retrieveById(Number(this.activedRouter.snapshot.paramMap.get('id')));
  }
}
