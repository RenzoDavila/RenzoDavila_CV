import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataMain } from 'src/app/consts/DataMain.const';
import { DataExperience } from 'src/app/consts/DataExperience.const';
import { DataProjects } from 'src/app/consts/DataProjects.const';
import { DataStudies } from 'src/app/consts/DataStudies.const';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private mainData$ = new BehaviorSubject<any[]>(DataMain);
  private experienceData$ = new BehaviorSubject<any[]>(DataExperience);
  private projectsData$ = new BehaviorSubject<any[]>(DataProjects);
  private studiesData$ = new BehaviorSubject<any[]>(DataStudies);

  constructor() { }

  getMain(): Observable<any[]> {
    return this.mainData$.asObservable();
  }

  getExperience(): Observable<any[]> {
    return this.experienceData$.asObservable();
  }

  getProjects(): Observable<any[]> {
    return this.projectsData$.asObservable();
  }

  getStudies(): Observable<any[]> {
    return this.studiesData$.asObservable();
  }
}
