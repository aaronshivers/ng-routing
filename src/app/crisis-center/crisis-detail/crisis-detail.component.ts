import { Component, OnInit } from '@angular/core';
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
      switchMap((params: ParamMap) => {
        return this.service.getCrisis(params.get('id'));
      }),
    );
  }

  gotoCrises(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    this.router.navigate(
      [ '../', { id: crisisId, foo: 'foo' } ],
      { relativeTo: this.route },
    );
  }

}
