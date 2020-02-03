import { Component, OnInit } from '@angular/core';
import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: [ './crisis-list.component.css' ],
})
export class CrisisListComponent implements OnInit {
  selectedId: number;
  crises$: Observable<Crisis[]>;

  constructor(private crisisService: CrisisService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getCrises();
  }

  getCrises(): void {
    this.crises$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.crisisService.getCrises();
      }),
    );
  }
}
