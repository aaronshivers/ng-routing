import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisesCenterRoutingModule } from './crises-center-routing.module';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ CrisisDetailComponent, CrisisListComponent ],
  imports: [
    CommonModule,
    CrisesCenterRoutingModule,
    FormsModule,
  ],
})
export class CrisesCenterModule {
}
