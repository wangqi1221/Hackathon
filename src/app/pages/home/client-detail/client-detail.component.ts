import { ServiceInfo, Tornado } from '@/model/model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.less']
})
export class ClientDetailComponent implements OnInit {
  scrrentServices: Tornado[] = []
  recommendServices: ServiceInfo[] = []

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.scrrentServices = [
      {name: 'Service1', value: 10},
      {name: 'Service2', value: 10},
      {name: 'Service1', value: 5},
      {name: 'Service2', value: 3},
      {name: 'Service1', value: 2},
      {name: 'Service2', value: 20},
      {name: 'Service1', value: 10},
      {name: 'Service2', value: 15},
      {name: 'Service1', value: 5},
      {name: 'Service2', value: 20}
    ]

    this.recommendServices = [
      {name: 'Service1', desc: "desc"},
      {name: 'Service2', desc: "desc"},
      {name: 'Service1', desc: "desc"},
      {name: 'Service2', desc: "desc"},
      {name: 'Service1', desc: "desc"}
    ]
  }

  onNavigationPredict() {
    this.router.navigate(['/predict'])
  }
}
