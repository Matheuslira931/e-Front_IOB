import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  @Input() content = '';
  @Input() customClass = '';
  @Input() altText = '';
  @Input() srcImg: any;
  @Input() contentStyle!: { [key: string]: string };

}
