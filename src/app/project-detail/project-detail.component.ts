import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Project } from '../project';
import { ProjectService }  from '../project.service';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  
  // @Input() 
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {  }

  ngOnInit() {
  	this.getProject();
  	console.log("init");
  	console.log("WHAT",this.project);

  }

  getProject(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id)
      .subscribe(project => this.project = project);
  }

  goBack(): void {
	  this.location.back();
	}

}



  // getProject(): void {
  //   // const id = +this.route.snapshot.paramMap.get('id');
  //   console.log("router",this.route.snapshot.paramMap);

  //   const id = +this.route.snapshot.paramMap.get('id');
  //   // const id: string = route.snapshot.params.id;
  //   console.log("ID needs to show something!!",id);
  //   // this.projectService.getProject(2)
  //   this.projectService.getProject(id)
  //     .subscribe(project => this.project = project);
  // }
