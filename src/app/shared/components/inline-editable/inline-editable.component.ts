import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inline-editable',
  templateUrl: './inline-editable.component.html',
  styleUrls: ['./inline-editable.component.scss']
})
export class InlineEditableComponent implements OnInit {
  @Output() valueChange = new EventEmitter();

  @ViewChild('inputElement', {static: false}) inputElement: ElementRef<HTMLInputElement>;
  editable = false;

  private _value: string | number;

  get value(): string | number {
    return this._value;
  }

  @Input() set value(v: string | number) {
    if (v === this._value) {
      return;
    }
    if (!(this._value === undefined)) {
      this.valueChange.emit(v);
    }

    this._value = v;
  }

  ngOnInit() {
  }

  onValueClick() {
    this.editable = true;
    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    });
  }
}
