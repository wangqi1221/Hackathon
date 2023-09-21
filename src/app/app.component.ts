import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlatformService } from './service/platformService';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { StoreService } from './stores/menu/store/store.component';
import { Subject, filter, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>()

  title = 'test';

  constructor(
    private activatedRoute: ActivatedRoute,
    public platformService: PlatformService,
    private router: Router,
    private menuStore: StoreService) {}

    ngOnInit(): void {
      this.router.events.pipe(
        filter(e => e instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild
          }
          return route
        }),
        filter(route => route.outlet === 'primary'),
        takeUntil(this.destroy$)
      )
      .subscribe(route => {
        this.menuStore.setActivedRoute(route)
        window.scrollTo(0,0)
      })
    }
    
    ngOnDestroy(): void {
      this.destroy$.next()
      this.destroy$.complete()
    }
}
