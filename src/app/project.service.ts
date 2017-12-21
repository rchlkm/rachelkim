import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Project } from './project';
import { PROJECTS } from './list-of-projects';

@Injectable()
export class ProjectService {

  constructor() { }

//   getProjects(): Project[] {
//   return PROJECTS;
// }

	getProjects(): Observable<Project[]> {
	  return of(PROJECTS);
	}

	// getProject(title: string): Observable<Project> {
	//   return of(PROJECTS.find(project => project.title === title));
	// }

	getProject(id: number): Observable<Project> {
		console.log("at least it came through service...", id);
	  return of(PROJECTS.find(project => project.id === id));
	}

}
