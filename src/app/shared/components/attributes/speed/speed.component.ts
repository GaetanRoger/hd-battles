import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Speed } from 'src/app/models/speed';

@Component({
  selector: 'app-speed',
  templateUrl: './speed.component.html',
  styleUrls: ['./speed.component.scss']
})
export class SpeedComponent implements OnInit {
  @Input() value: Speed[];
  @Input() editable = false;
  @Output() valueChange = new EventEmitter<Speed[]>();

  constructor() { }

  get tooltipText(): string {
    return this.editable
      ? 'Cliquez pour modifier la valeur'
      : undefined;
  }

  toSpeedString(speed: Speed): string {
    const desc = speed.description ? ` (${speed.description})` : '';
    const type = speed.type.slice(0, 1).toUpperCase() + speed.type.slice(1);

    return `${type} ${speed.value} m${desc}`;
  }

  ngOnInit() {
  }

  async openSheet() {
    if (!this.editable) {
      return;
    }

    // const results = await this.bottomSheet.open<SensesEditorBottomSheetComponent, Sens[], Sens[]>(
    //   SensesEditorBottomSheetComponent,
    //   {
    //     data: this.value,
    //     autoFocus: true
    //   }
    // )
    //   .afterDismissed()
    //   .toPromise();

    // if (results) {
    //   this.value = results;
    //   this.valueChange.emit(results);
    // }
  }

}
