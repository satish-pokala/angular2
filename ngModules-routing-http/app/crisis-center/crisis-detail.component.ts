/**
 * Created by Sonakshi on 8/22/2016.
 */
import { Component, OnInit }      from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { Crisis }         from './crisis.service';
import { Observable }     from 'rxjs/Observable';
import {CrisisService} from "./crisis.service";
@Component({
    template: `
  <div *ngIf="crisis">
    <h3>"Hello {{crisis.name}}"</h3>
    <div>
      <label>Id: </label>{{crisis.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="crisis.name" placeholder="name"/>
    </div>
    <p>
      <button (click)="back()">Back</button>
    </p>
  </div>
  `,
    styles: ['input {width: 20em}']
})
export class CrisisDetailComponent implements OnInit {
    crisis: Crisis;
    editName: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router,private crisisService:CrisisService) { }
    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.crisisService.getCrisis(id)
                    .then(crisis => this.crisis = crisis);
            }
        });
    }
    cancel() {
        this.gotoCrises();
    }
    back() {
       window.history.back();
    }

    gotoCrises() {
        let crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['/crisis-center',crisisId]);
    }
}
