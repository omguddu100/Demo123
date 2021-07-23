import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider'
import {MatTabsModule} from '@angular/material/tabs'
import {MatStepperModule} from '@angular/material/stepper';







@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatGridListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatTabsModule,
    MatStepperModule
    
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatGridListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatTableModule,MatPaginatorModule,
    MatDividerModule,
    MatTabsModule,
    MatStepperModule
  ],
  declarations: []
})
export class MaterialModule { }