import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ViewAllReviewsComponent } from './components/view-all-reviews/view-all-reviews.component';
import { CoreLandingScreenComponent } from './core-landing-screen/core-landing-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AddReviewComponent,
    ViewAllReviewsComponent,
    CoreLandingScreenComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
})
export class CoreModule {}
