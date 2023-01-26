import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent implements OnInit {

  constructor(private router : Router) { }

  projects = test_projects;

  ngOnInit(): void {
  }

  openProject(projectId : string, companyId : string) {
    this.router.navigate([`workbench/company/`, companyId, `project/`, projectId]);
  }
}




interface Project {
  id: string,        //UUID
  companyId: string, //UUID
  companyName: string,
  name: string
}









const test_projects: Project[] = [
  {
    id: '123e4567-e89b-12d3-a456-426655440000',
    companyId: '123e4567-e89b-12d3-a456-426655440001',
    companyName: 'ACME Inc.',
    name: 'Project 1'
  },
  {
    id: '123e4567-e89b-12d3-a456-426655440010',
    companyId: '123e4567-e89b-12d3-a456-426655440001',
    companyName: 'ACME Inc.',
    name: 'Project 2'
  },
  {
    id: '123e4567-e89b-12d3-a456-426655440100',
    companyId: '123e4567-e89b-12d3-a456-426655440002',
    companyName: 'Contoso Corp.',
    name: 'Project 3'
  }
];
