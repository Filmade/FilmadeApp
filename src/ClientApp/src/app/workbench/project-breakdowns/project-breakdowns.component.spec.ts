import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectBreakdownsComponent } from './project-breakdowns.component';

describe('ProjectBreakdownsComponent', () => {
  let component: ProjectBreakdownsComponent;
  let fixture: ComponentFixture<ProjectBreakdownsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectBreakdownsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectBreakdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
