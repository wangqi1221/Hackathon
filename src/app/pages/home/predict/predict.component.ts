import { ServiceInfo } from '@/model/model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-predict',
  templateUrl: './predict.component.html',
  styleUrls: ['./predict.component.less']
})
export class PredictComponent implements OnInit {

  @Input() services: ServiceInfo[] = [
      {name: 'Service1', desc: "desc"},
      {name: 'Service2', desc: "desc"},
      {name: 'Service3', desc: "desc"},
      {name: 'Service4', desc: "desc"},
      {name: 'Servic5', desc: "desc"}
  ]

  supportServices: ServiceInfo[] = [
      {name: 'Service1', desc: "desc"},
      {name: 'Service2', desc: "desc"},
      {name: 'Service3', desc: "desc"},
      {name: 'Service4', desc: "desc"},
      {name: 'Servic5', desc: "desc"},
      {name: 'Service6', desc: "desc"},
      {name: 'Service7', desc: "desc"},
      {name: 'Service8', desc: "desc"},
      {name: 'Service9', desc: "desc"},
      {name: 'Servic10', desc: "desc"}
  ]

  isCenterCard = false;  

  ngOnInit(): void {
    // if (this.services.length === 1) {  
    //   this.isCenterCard = true;  
    // } else {  
    //   // 判断当前卡片是否是第一张或最后一张卡片  
    //   this.isCenterCard = this.services.indexOf(this.item) === 0 || this.items.indexOf(this.item) === this.items.length - 1;  
    // } 
  }

  menu() {
    
  }

}
