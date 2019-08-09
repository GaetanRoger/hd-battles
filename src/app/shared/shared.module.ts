import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';



const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule
];

const modules = [
  ReactiveFormsModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules,
    ...materialModules
  ],
  exports: [
    ...modules,
    ...materialModules
  ]
})
export class SharedModule { }
