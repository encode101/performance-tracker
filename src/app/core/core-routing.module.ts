import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ViewAllReviewsComponent } from './components/view-all-reviews/view-all-reviews.component';
import { CoreLandingScreenComponent } from './core-landing-screen/core-landing-screen.component';

const routes: Routes = [
  {
    path: '',
    component: CoreLandingScreenComponent,
  },
  {
    path: 'add-review',
    component: AddReviewComponent,
  },
  {
    path: 'view-all-reviews',
    component: ViewAllReviewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
