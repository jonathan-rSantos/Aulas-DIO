import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({

  templateUrl: './courses-info.component.html'
})

export class CoursesInfoComponent implements OnInit {

  courseId!: number;

  constructor(private activedRouter: ActivatedRoute){

  }

  ngOnInit(): void {
      this.courseId = Number(this.activedRouter.snapshot.paramMap.get('id'));
  }
}
