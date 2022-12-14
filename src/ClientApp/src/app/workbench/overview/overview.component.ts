import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  openProject(projectId : string, companyId : string) {
    this.router.navigate([`workbench/company/project/`, companyId, projectId]);
  }
}
