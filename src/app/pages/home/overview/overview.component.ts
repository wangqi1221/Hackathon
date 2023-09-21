import { Component, OnInit } from '@angular/core';
import { Tornado } from '@/model/model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {
  tornados: Tornado[] = []

  ngOnInit(): void {
    this.tornados = [
      {name: "Short-term treasuries", value: 30},
      {name: "Floating rate bonds", value: 40},
      {name: "Corporate bonds", value: 30},
      {name: "Short-term treasuries", value: 30},
      {name: "Floating rate bonds", value: 40},
      {name: "Corporate bonds", value: 30},
      {name: "Short-term treasuries", value: 30},
      {name: "Floating rate bonds", value: 40},
      {name: "Corporate bonds", value: 30},
      {name: "Floating rate bonds", value: 40},
      {name: "Corporate bonds", value: 30},
      {name: "Floating rate bonds", value: 40},
      {name: "Corporate bonds", value: 30},
      {name: "Floating rate bonds", value: 40},
      {name: "Corporate bonds", value: 30}
    ]
  }
}
