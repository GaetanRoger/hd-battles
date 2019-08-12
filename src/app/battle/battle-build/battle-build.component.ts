import { BestiaireService } from '../../shared/services/bestiaire/bestiaire.service';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Monstre } from 'src/app/models/monstre.interface';
import { Battle } from '../../models/battle';
import { LocalStorageService } from '../../shared/services/local-storage/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-battle-build',
  templateUrl: './battle-build.component.html',
  styleUrls: ['./battle-build.component.scss']
})
export class BattleBuildComponent implements OnInit {
  battleBuildForm: FormGroup;
  filteredMontres: Observable<Monstre[]>[] = [];

  constructor(private readonly fb: FormBuilder,
              private readonly bestiaire: BestiaireService,
              private readonly localStorage: LocalStorageService,
              private readonly router: Router) {
  }

  get monstresArray(): FormArray {
    return this.battleBuildForm.get('monstres') as FormArray;
  }

  get charactersArray(): FormArray {
    return this.battleBuildForm.get('characters') as FormArray;
  }

  monstreName(monstre: Monstre): string {
    return monstre ? monstre.title : null;
  }

  ngOnInit() {
    this.battleBuildForm = this.fb.group({
      name: [null, Validators.required],
      monstres: this.fb.array([]),
      characters: this.fb.array([])
    });
  }

  addMonstre(): void {
    const newMonstreControlGroup = this.fb.group({
      monstre: this.fb.control(null, [Validators.required]),
      quantity: this.fb.control(1, [Validators.required, Validators.min(1)]),
      randomHp: this.fb.control(true, [Validators.required])
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

  addCharacter(): void {
    this.charactersArray.push(this.fb.group({
      name: this.fb.control(null, Validators.required),
    }));
  }

  removeMonstre(index: number): void {
    this.monstresArray.removeAt(index);
    this.filteredMontres.splice(index, 1);
  }

  submit() {
    const id = Date.now().toString();
    this.localStorage.addToStoredMap<Battle>('built-battles', id,{id, ...this.battleBuildForm.value});
    this.router.navigate(['/battle/recap', id]);
  }

  private filterMonstres(monstres: Monstre[], filterValue: string): Monstre[] {
    const cleanedFilterValue = filterValue.trim().toLowerCase();

    return monstres.filter(monstre => monstre.title.trim().toLowerCase().includes(cleanedFilterValue));
  }
}
