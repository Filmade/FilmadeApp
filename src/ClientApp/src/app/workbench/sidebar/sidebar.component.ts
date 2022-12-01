import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ChildActivationStart, NavigationEnd, NavigationStart, Router, RoutesRecognized } from '@angular/router';
import * as $ from 'jquery';
import * as path from 'path';
import { title } from 'process';


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
  navRoutes?: RouteInfo[];

  companyId?: string;
  projectiD?: string;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.navRoutes = OverviewRoutes;

    this.router.events.subscribe(event => {


      // if (event instanceof NavigationStart) {
        
        
      //   this.companyId = event.snapshot.params["cid"];
      //   this.projectiD = event.snapshot.params["pid"];

      //   console.log(this.router.url);


      //   if (this.router.url.startsWith("/workbench/company/project")) {
      //     this.navRoutes = this.finalizeRouteProjects();
      //     console.log("aa");
      //   }

      //   else if (this.router.url.startsWith("/workbench/overview")) {
      //     this.navRoutes = OverviewRoutes;
      //     console.log("aa11");
      //   }
      // }


    });
  }






  isMobileMenu() {
    if ($(window)?.width() ?? 0 > 991) {
      return false;
    }
    return true;
  };


  private finalizeRouteProjects() {
    return ProjectRoutes.map(x => ({ class: x.class, icon: x.icon, path: x.path.replace("{cid}", this.companyId!), title: x.title } as RouteInfo));
  }



}
