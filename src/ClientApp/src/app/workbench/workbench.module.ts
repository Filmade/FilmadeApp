import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';


import { ProjectComponent } from './project/project.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './workbench-sidebar/workbench-sidebar.component';

import { MatQuillModule } from './mat-quill/mat-quill-module';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { ProjectSidebarComponent } from './project-sidebar/project-sidebar.component';
import { ProjectLayoutComponent } from './project-layout/project-layout.component';
import { WorkbenchLayoutComponent } from './workbench-layout/workbench-layout.component';
import { ProjectScriptComponent } from './project-script/project-script.component';
import { QuillModule } from 'ngx-quill';
import { ProjectBreakdownsComponent } from './project-breakdowns/project-breakdowns.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OverviewComponent,
    ProjectComponent,
    NavbarComponent,
    SidebarComponent,
    ProjectSidebarComponent,
    ProjectScriptComponent,
    ProjectBreakdownsComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    ProjectSidebarComponent
  ],
  imports: [
    CommonModule,
    MatQuillModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatRippleModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
      QuillModule.forRoot(),
    RouterModule.forChild([
      {
        path: 'overview', component: WorkbenchLayoutComponent, children: [
          { path: '', component: OverviewComponent }
        ]
      },

      {
        path: 'company/:cid/project/:pid/overview', component: ProjectLayoutComponent, children: [
          { path: '', component: ProjectComponent }
        ]
      },
      {
        path: 'company/:cid/project/:pid/script', component: ProjectLayoutComponent, children: [
          { path: '', component: ProjectScriptComponent }
        ]
      },
      {
        path: 'company/:cid/project/:pid/breakdowns', component: ProjectLayoutComponent, children: [
          { path: '', component: ProjectBreakdownsComponent }
        ]
      },
      {
        path: 'company/:cid/project/:pid', redirectTo: 'company/:cid/project/:pid/overview'
      },
    ])
  ]
})
export class WorkbenchModule { }
