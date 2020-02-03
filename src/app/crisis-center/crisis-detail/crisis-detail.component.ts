import { Component, Input, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CrisisService } from '../crisis.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: [ './crisis-detail.component.css' ],
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
  ) {
  }

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getCrisis(params.get('id'))),
    );
  }

  goToCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    this.router.navigate([ '/heroes', { id: crisisId, foo: 'foo' } ]);
  }

}
