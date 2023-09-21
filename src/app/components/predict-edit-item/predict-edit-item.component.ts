import { ServiceInfo } from '@/model/model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-predict-edit-item',
  templateUrl: './predict-edit-item.component.html',
  styleUrls: ['./predict-edit-item.component.less']
})
export class PredictEditItemComponent implements OnInit {
  @Input() service: ServiceInfo = {}

  ngOnInit(): void {
    
  }

  onDel() {
    
  }
}
