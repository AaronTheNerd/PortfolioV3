import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Project16Component } from "./project16.component";

describe("Project16Component", () => {
  let component: Project16Component;
  let fixture: ComponentFixture<Project16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Project16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
