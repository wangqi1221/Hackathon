import { ServiceInfo } from '@/model/model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.less']
})
export class ServiceItemComponent implements OnInit {
  @Input() service: ServiceInfo = {}

  ngOnInit(): void {
    
  }

  onDel() {
    
  }
}
