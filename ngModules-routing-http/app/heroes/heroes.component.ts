import { Component,OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Hero } from './hero';
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-heroes',
    template: `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}<button class="delete-button" (click)="deleteHero(hero, $event)">Delete</button>

      </li>
    </ul>
    <div class="error" *ngIf="error">{{error}}</div>
    <button (click)="addHero()">Add New Hero</button>
    <div *ngIf="addingHero">
        <my-hero-detail (close)="close($event)"></my-hero-detail>
    </div>

    <div *ngIf="selectedHero">
      <h2>
        {{selectedHero.name | uppercase}} is my hero
      </h2>
      <button (click)="gotoDetail()">View Details</button>
    </div>  `,
    styles: [`
    .error {color:red;}
button.delete-button{
  float:right;
  background-color: gray !important;
  color:white;
}
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class HeroesComponent implements OnInit{
    title = 'Tour of Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    error:any;
    addingHero:boolean=false;
    constructor(private heroService: HeroService,private _router:Router) { }
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        console.log("getting heroes");
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(){
        this._router.navigate(['/hero', this.selectedHero.id]);
    }
    addHero(): void {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero): void {
        this.addingHero = false;
        console.log("I am in heroes component");
        if (savedHero) { this.getHeroes(); }
    }

    deleteHero(hero: Hero, event: any): void {
        event.stopPropagation();
        this.heroService
            .delete(hero)
            .then(res => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            })
            .catch(error => this.error = error);
    }
}
