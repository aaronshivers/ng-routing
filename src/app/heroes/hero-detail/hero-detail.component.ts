import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HeroService } from '../hero.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService,
  ) {
  }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getHero(params.get('id'))),
    );
  }

  goToHeroes(hero: Hero) {
    const heroId = hero ? hero.id : null;
    this.router.navigate([ '/heroes', { id: heroId, foo: 'foo' } ]);
  }

}
