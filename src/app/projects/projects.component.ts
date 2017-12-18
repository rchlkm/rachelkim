import { Component, OnInit } from '@angular/core';

import { PROJECTS } from '../list-of-projects';
import { Project } from '../project';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

	projects = PROJECTS;


  constructor() { 
    // console.log("projects", this.projects);
  }

  ngOnInit() { }

  // onSelect(project: Project): void {
  // 		this.selectedProject = project;
  // 	}

}
