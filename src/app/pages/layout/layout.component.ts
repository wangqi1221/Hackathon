import { Component } from '@angular/core';
import { PlatformService } from '@/service/platformService';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent {
  constructor(public platformService: PlatformService) {}
}
