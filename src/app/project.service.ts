import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Project } from './project';
import { PROJECTS } from './list-of-projects';

@Injectable()
export class ProjectService {

  constructor() { }

	getProjects(): Observable<Project[]> {
	  return of(PROJECTS);
	}

	getProject(id: string): Observable<Project> {
	  return of(PROJECTS.find(project => project.id === id));
	}

}
// getProject(id: number): Observable<Project> {
// 		console.log("at least it came through service...", id);
// 	  return of(PROJECTS.find(project => project.id === id));
// 	}

//   getProjects(): Project[] {
//   return PROJECTS;
// }
