import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { WishesComponent } from './wishes/wishes.component';
import { CommentsComponent } from './comments/comments.component';
import { ReviewComponent } from './review/review.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinalComponent } from './final/final.component';
import { HttpClientModule } from '@angular/common/http';
import { WishesFormComponent } from './wishes/wishes-form/wishes-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactInformationComponent, pathMatch: 'full' },
  { path: 'wishes', component: WishesComponent, pathMatch: 'full' },
  { path: 'comments', component: CommentsComponent, pathMatch: 'full' },
  { path: 'review', component: ReviewComponent, pathMatch: 'full' },
  { path: 'nav-bar', component: NavBarComponent, pathMatch: 'full' },
  { path: 'final', component: FinalComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    ContactInformationComponent,
    WishesComponent,
    CommentsComponent,
    ReviewComponent,
    FinalComponent,
    WishesFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
