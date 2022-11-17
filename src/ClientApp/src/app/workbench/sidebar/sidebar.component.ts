import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const OverviewRoutes: RouteInfo[] = [
  { path: '/workbench/overview', title: 'Overview', icon: 'dashboard', class: '' },
  { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' }
];

export const ProjectRoutes: RouteInfo[] = [
  { path: '/workbench/company/{cid}/project/{pid}', title: 'Overview', icon: 'dashboard', class: '' },
  { path: '/workbench/company/{cid}/project/{pid}', title: 'Scripts', icon: 'description', class: '' }
];

@Component({
  selector: 'app-workbench-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems?: any[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = OverviewRoutes.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window)?.width() ?? 0 > 991) {
      return false;
    }
    return true;
  };

  getNavRoutes() {
    if (this.router.url.startsWith("/workbench/overview"))
      return OverviewRoutes;

    if (this.router.url.startsWith("/workbench/company") && this.router.url.includes("project"))
      return ProjectRoutes;

    return ProjectRoutes;
  }



}
