import { FiltersListComponent } from './components/filters-list/filters-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbAccordionModule
  ],
  declarations: [
    HomeComponent,
    FiltersListComponent
  ]
})
export class HomeModule { }
