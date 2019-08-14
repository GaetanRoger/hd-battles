import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnChanges {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() image = '/assets/img/battle-build.jpg';
  @Input() imageAligmentX = 'center';
  @Input() imageAligmentY = 'top';

  dynamicStyles: { [key: string]: any };

  ngOnChanges(changes: SimpleChanges): void {
    this.dynamicStyles = {
      'background-image': `url("${this.image}"`,
      'background-position-x': this.imageAligmentX,
      'background-position-y': this.imageAligmentY,
    };
  }
}
