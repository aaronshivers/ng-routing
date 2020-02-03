import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './hero-list.component.html',
  styleUrls: [ './hero-list.component.css' ],
})
export class HeroListComponent implements OnInit {
  selectedId: number;
  heroes$: Observable<Hero[]>;

  constructor(private service: HeroService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      }),
    );
  }
}
