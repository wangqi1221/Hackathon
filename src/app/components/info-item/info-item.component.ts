import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomValue } from '@/model/model';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.less']
})
export class InfoItemComponent implements OnInit {
  @Input() tornado: CustomValue = {}
  @Input() totalValue: number = 0

  per: number = 0

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.per = Number((this.tornado.customValue! / this.totalValue * 100).toFixed(2))
  }

  onNavigationDetail() {
    this.router.navigate(['/detail', {id: this.tornado.clientId}])
  }
}
function toFixed(arg0: number) {
  throw new Error('Function not implemented.');
}

