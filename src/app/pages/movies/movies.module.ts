import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { DataViewModule } from 'primeng/dataview';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { EllipsisPipe } from 'src/app/shared/ellipsis.pipe';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    MoviesComponent,
    EllipsisPipe
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    DataViewModule,
    ToolbarModule,
    ButtonModule,
    TooltipModule,
    PaginatorModule,
    CardModule,
    ProgressSpinnerModule
  ]
})
export class MoviesModule { }
