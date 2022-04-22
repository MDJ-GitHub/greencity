import { Component, OnInit } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import {Problems} from '../shared/problems';
import { ProblemService } from '../shared/services/problem.service';

@Component({
  selector: 'app-a-fr-reports',
  templateUrl: './a-fr-reports.component.html',
  styleUrls: ['./a-fr-reports.component.css']
})
export class AFrReportsComponent implements OnInit {
  problems?: Problems[];
  currentProblem: Problems = {
    title: '',
    description: '',
    name:'',
    subject:''
  };
  currentIndex = -1;
  location = '';
  message = '';

  constructor(private problemService: ProblemService,private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.retrieveProblems();
  }

  retrieveProblems(): void {
    this.problemService.getAll()
      .subscribe({
        next: (data) => {
          this.problems = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveProblems();
    this.currentProblem = {};
    this.currentIndex = -1;
  }
  setActiveProblems(problem: Problems, index: number): void {
    this.currentProblem = problem;
    this.currentIndex = index;
  }
  
  getProblem($key: string): void {
    this.problemService.get($key)
      .subscribe({
        next: (data) => {
          this.currentProblem = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updateTutorial(): void {
    this.message = '';
    this.problemService.update(this.currentProblem.$key, this.currentProblem)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Problème modifié!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTutorial(): void {
    this.problemService.deleteByProblem(this.currentProblem.$key)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchLocation(): void {
    this.currentProblem = {};
    this.currentIndex = -1;
    this.problemService.findByLocation(this.location)
      .subscribe({
        next: (data) => {
          this.problems = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
