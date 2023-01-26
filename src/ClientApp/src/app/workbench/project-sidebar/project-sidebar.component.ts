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

export const ProjectRoutes: RouteInfo[] = [
  { path: '/workbench/company/{cid}/project/{pid}', title: 'Overview', icon: 'dashboard', class: '' },
  { path: '/workbench/company/{cid}/project/{pid}', title: 'Scripts', icon: 'description', class: '' }
];

@Component({
  selector: 'app-workbench-project-sidebar',
  templateUrl: './project-sidebar.component.html',
  styleUrls: ['./project-sidebar.component.scss']
})
export class ProjectSidebarComponent implements OnInit {
  navRoutes?: RouteInfo[];

  companyId?: string;
  projectiD?: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.companyId = this.route.snapshot.paramMap.get('cid')!;
    this.projectiD = this.route.snapshot.paramMap.get('pid')!;
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
