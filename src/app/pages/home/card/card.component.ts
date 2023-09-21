import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent {
  @Input() title: string = ''
  @Input() subTitle: string = ''
  @Input() img: string = ''
}
