import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';


const crisesRoutes: Routes = [
  {
    path: 'crises',
    component: CrisisListComponent,
    data: { animation: 'crises' },
  },
  {
    path: 'crises/:id',
    component: CrisisDetailComponent,
    data: { animation: 'crisis' },
  },
];

@NgModule({
  imports: [ RouterModule.forChild(crisesRoutes) ],
  exports: [ RouterModule ],
})
export class CrisesCenterRoutingModule {
}
