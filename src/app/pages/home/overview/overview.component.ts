import { Component, OnInit } from '@angular/core';
import { CustomValue, ServiceInfo} from '@/model/model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {
  tornados: CustomValue[] = []

  cards: string[] = ['Service', 'Total customValue', 'Client', 'Total Subscription']

  totalCustomValue: number = 0

  topClient: CustomValue = {}

  topService: ServiceInfo = {}

  ngOnInit(): void {
    this.tornados = [
      {clientId: "1", clientName: "Short-term treasuries", customValue: 30},
      {clientId: "2", clientName: "Floating rate bonds", customValue: 40},
      {clientId: "3", clientName: "Corporate bonds", customValue: 30}
    ]

    this.totalCustomValue = this.tornados.reduce((total, item) => total + item.customValue!, 0)
    this.topClient = this.tornados.reduce((maxItem, item) => (item.customValue! > maxItem.customValue!) ? item : maxItem, this.tornados[0]); 
    // this.topClient = Math.max(...this.tornados(item => item.customValue))


  }
}
