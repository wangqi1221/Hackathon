import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tornado } from '@/model/model';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.less']
})
export class InfoItemComponent implements OnInit {
  @Input() tornado: Tornado = {}

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  onNavigationDetail() {
    this.router.navigate(['/detail'])
  }
}
