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
import { SidebarComponent } from './sidebar/sidebar.component';

import { QuillModule } from 'ngx-quill';
import { MatQuillModule } from './mat-quill/mat-quill-module';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    OverviewComponent,
    ProjectComponent,
    NavbarComponent,
    SidebarComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
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
    QuillModule.forRoot(),
    RouterModule.forChild([
      { path: 'overview', component: OverviewComponent },
      { path: 'company/project/:cid/:pid', component: ProjectComponent },

    ])
  ]
})
export class WorkbenchModule { }
