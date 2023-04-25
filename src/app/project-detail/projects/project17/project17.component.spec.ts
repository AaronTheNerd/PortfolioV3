import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Project17Component } from "./project17.component";

describe("Project17Component", () => {
  let component: Project17Component;
  let fixture: ComponentFixture<Project17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Project17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
