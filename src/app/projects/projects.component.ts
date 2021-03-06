import { Component, OnInit } from '@angular/core';
// , HostBinding

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

 // @HostBinding('style.height') height: Number;

  projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit() { 
    this.getProjects();
  }


  getProjects(): void {
    this.projectService.getProjects()
        .subscribe(projects => this.projects = projects);
  }

}

