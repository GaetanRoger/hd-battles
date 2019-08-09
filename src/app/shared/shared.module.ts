import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule, MatCheckboxModule, MatIconModule, MatListModule, MatTooltipModule } from '@angular/material';
import { AttributNamePipe } from './pipes/attribut-name.pipe';
import { MonstreAttributsComponent } from './components/monstre-attributs/monstre-attributs.component';
import { MedievalIconComponent } from './components/medieval-icon/medieval-icon.component';
import { DiceRollComponent } from './components/dice-roll/dice-roll.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html/sanitizeHtml.pipe';
import { InlineEditableComponent } from './components/inline-editable/inline-editable.component';



const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule,
  MatTooltipModule
];

const modules = [
  ReactiveFormsModule,
  FormsModule
];

const components = [
  MonstreAttributsComponent,
  MedievalIconComponent,
  DiceRollComponent,
  InlineEditableComponent
];

const pipes = [
  AttributNamePipe,
  SanitizeHtmlPipe
];


@NgModule({
  declarations: [...pipes, ...components],
  imports: [
    CommonModule,
    ...modules,
    ...materialModules
  ],
  exports: [
    ...modules,
    ...materialModules,
    ...pipes,
    ...components,
    MedievalIconComponent,
    DiceRollComponent
  ]
})
export class SharedModule { }
