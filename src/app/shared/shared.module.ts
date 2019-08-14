import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  MatBottomSheetModule, MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatRippleModule, MatSelectModule, MatSliderModule, MatStepperModule,
  MatTooltipModule
} from '@angular/material';
import { AttributNamePipe } from './pipes/attribut-name.pipe';
import { MonstreAttributsComponent } from './components/monstre-attributs/monstre-attributs.component';
import { MedievalIconComponent } from './components/medieval-icon/medieval-icon.component';
import { DiceRollComponent } from './components/dice-roll/dice-roll.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html/sanitizeHtml.pipe';
import { InlineEditableComponent } from './components/inline-editable/inline-editable.component';
import { MonstreCardTitleComponent } from './components/monstre-card-title/monstre-card-title.component';
import { CaracComponent } from './components/attributes/carac/carac.component';
import { ModifierPipe } from './pipes/modifier/modifier.pipe';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CaracEditorBottomSheetComponent } from './components/editors/carac-editor/carac-editor-bottom-sheet.component';
import { DiceRollEditorBottomSheetComponent } from './components/editors/dice-roll-editor/dice-roll-editor-bottom-sheet.component';
import { ClasseArmureComponent } from './components/attributes/classe-armure/classe-armure.component';
import { ClasseArmureEditorBottomSheetComponent } from './components/editors/classe-armure-editor-bottom-sheet/classe-armure-editor-bottom-sheet.component';
import { SensComponent } from './components/attributes/sens/sens.component';
import { SensesEditorBottomSheetComponent } from './components/editors/senses-editor-bottom-sheet/senses-editor-bottom-sheet.component';
import { SpeedComponent } from './components/attributes/speed/speed.component';
import { MonstreCaracsComponent } from './components/monstre-caracs/monstre-caracs.component';



const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule,
  MatTooltipModule,
  MatRippleModule,
  MatBottomSheetModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatSliderModule
];

const modules = [
  ReactiveFormsModule,
  FormsModule
];

const components = [
  MonstreAttributsComponent,
  MedievalIconComponent,
  DiceRollComponent,
  InlineEditableComponent,
  MonstreCardTitleComponent,
  CaracComponent,
  PageHeaderComponent,
  ClasseArmureComponent,
  SensComponent,
  SpeedComponent,
  MonstreCaracsComponent
];

const entryComponents = [
  CaracEditorBottomSheetComponent,
  DiceRollEditorBottomSheetComponent,
  ClasseArmureEditorBottomSheetComponent,
  SensesEditorBottomSheetComponent
];

const pipes = [
  AttributNamePipe,
  SanitizeHtmlPipe,
  ModifierPipe
];


@NgModule({
  declarations: [...pipes, ...components, ...entryComponents],
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
    ...entryComponents
  ],
  providers: [
    ...pipes
  ],
  entryComponents: [...entryComponents]
})
export class SharedModule { }
