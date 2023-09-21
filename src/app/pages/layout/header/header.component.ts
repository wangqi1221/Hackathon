import { MENUS } from '@/defs/constants';
import { MenuItemModel } from '@/defs/types';
import { StoreService } from '@/stores/menu/store/store.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  menus = MENUS
  isLoginCLicked = false
  isLoggedIn = false

  constructor(
    private menuStore: StoreService, 
    private router: Router) {}

  isActivated(item: MenuItemModel): boolean {
    return item?.unique === this.menuStore.activatedRoute?.snapshot?.data?.unique
  } 

  OnLoginClick($event: any) {
    if (!!this.isLoginCLicked) {
      return
    }
    this.isLoginCLicked = true
    const element = document.getElementById('commonLogin')
    if (!!element) {
      setTimeout(() => {
        element.click()
      }, 1e3)
    }
  }

  onMenuClick(menu: MenuItemModel){
    if(!!menu.routerLink) {
      this.router.navigateByUrl(menu?.routerLink)
    }
  }
}
