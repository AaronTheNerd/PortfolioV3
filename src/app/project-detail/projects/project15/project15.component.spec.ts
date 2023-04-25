import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Project15Component } from "./project15.component";

describe("Project15Component", () => {
  let component: Project15Component;
  let fixture: ComponentFixture<Project15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Project15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
