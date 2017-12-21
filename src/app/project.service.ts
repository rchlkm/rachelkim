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

}
