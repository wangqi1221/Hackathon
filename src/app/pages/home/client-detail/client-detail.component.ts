import { ServiceInfo, Tornado, UserProfile } from '@/model/model';
import { PlatformService } from '@/service/platformService';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.less']
})
export class ClientDetailComponent implements OnInit {
  id?: string
  userProfile: UserProfile = {}
  scrrentServices: Tornado[] = []
  recommendServices: ServiceInfo[] = []
  subscription?: Subscription

  constructor(
    private actviatedRoute: ActivatedRoute,
    // private service: ServiceModel,
    private service: PlatformService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.id = this.actviatedRoute.snapshot.params['id']
    // this.loadProfile()
    // this.subscription = this.actviatedRoute.queryParams.subscribe(
    //   (value: Params) => {
    //     this.id = value?.id
    //   }
    // )

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

  // loadProfile() {
  //   const id: string = this.id!
  //   this.service.getClientProfile(id).subscribe(
  //     (data: UserProfile) => this.userProfile = data
  //   )
  // }

  onNavigationPredict() {
    this.router.navigate(['/predict'])
  }
}
