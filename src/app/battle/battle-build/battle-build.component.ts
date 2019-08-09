import { BestiaireService } from './../../shared/bestiaire/bestiaire.service';
import { Observable, combineLatest } from 'rxjs';
import { map, filter, startWith, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Monstre } from 'src/app/models/monstre.interface';

@Component({
  selector: 'app-battle-build',
  templateUrl: './battle-build.component.html',
  styleUrls: ['./battle-build.component.scss']
})
export class BattleBuildComponent implements OnInit {
  battleBuildForm: FormGroup;
  filteredMontres: Observable<Monstre[]>[] = [];

  constructor(
    private readonly fb: FormBuilder,
    private readonly bestiaire: BestiaireService
  ) {
  }

  get nameControl(): FormControl {
    return this.battleBuildForm.get('name') as FormControl;
  }

  get monstresArray(): FormArray {
    return this.battleBuildForm.get('monstres') as FormArray;
  }

  getSelectedMonstre(index: number): Observable<Monstre> {
    return this.monstresArray.at(index).valueChanges
      .pipe(
        tap(v => console.log('for index', index, 'value=', v)),
        map(monstreValue => monstreValue.monstre),
        tap(v => console.log('for index', index, 'value=', v))
      );
  }

  monstreName(monstre: Monstre): string {
    return monstre ? monstre.title : null;
  }

  ngOnInit() {
    this.battleBuildForm = this.fb.group({
      name: [null, Validators.required],
      monstres: this.fb.array([])
    });
  }

  addMonstre(): void {
    const newMonstreControlGroup = this.fb.group({
      monstre: this.fb.control(null, [Validators.required]),
      quantity: this.fb.control(1, [Validators.required, Validators.min(1)])
    });
    this.monstresArray.push(newMonstreControlGroup);

    const filteredMonstres$ = newMonstreControlGroup.get('monstre').valueChanges
      .pipe(
        filter(f => !!f),
        map(f => typeof f === 'string' ? f : f.title),
        map(f => this.filterMonstres(this.bestiaire.getAll(), f))
      );

    this.filteredMontres.push(filteredMonstres$);
  }

  private filterMonstres(monstres: Monstre[], filterValue: string): Monstre[] {
    const cleanedFilterValue = filterValue.trim().toLowerCase();

    return monstres.filter(monstre => monstre.title.trim().toLowerCase().includes(cleanedFilterValue));
  }

  removeMonstre(index: number): void {
    this.monstresArray.removeAt(index);
  }

}
