import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Project11Component } from "./project11.component";

describe("Project11Component", () => {
  let component: Project11Component;
  let fixture: ComponentFixture<Project11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Project11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
