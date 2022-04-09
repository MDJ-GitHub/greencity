import { Injectable } from '@angular/core';
import { Problem } from '../shared/problem';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class CrudService {
  problemsRef!: AngularFireList<any>;
  problemRef!: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  AddProblem(problem: Problem) {
    this.problemsRef.push({
      title: problem.title,
      subject: problem.subject,
      description: problem.description,
      location: problem.location,
      type: problem.type,
      name: problem.name,
      phone: problem.phone,
    });
  }
  // Fetch Single Student Object
  GetProblem(id: string) {
    this.problemRef = this.db.object('problems-list/' + id);
    return this.problemRef;
  }
  // Fetch Students List
  GetProblemsList() {
    this.problemsRef = this.db.list('problems-list');
    return this.problemsRef;
  }
  // Update Student Object
  UpdateStudent(problem: Problem) {
    this.problemRef.update({
      title: problem.title,
      subject: problem.subject,
      description: problem.description,
      location: problem.location,
      type: problem.type,
      name: problem.name,
      phone: problem.phone,
    });
  }
  // Delete Student Object
  DeleteStudent(id: string) {
    this.problemRef = this.db.object('problems-list/' + id);
    this.problemRef.remove();
  }
}