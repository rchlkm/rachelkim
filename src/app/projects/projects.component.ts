import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { PROJECTS } from '../list-of-projects';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

	projects = PROJECTS;
	selectedProject: Project;

  constructor() { }

  ngOnInit() { }

  onSelect(project: Project): void {
  		this.selectedProject = project;
  	}

}
