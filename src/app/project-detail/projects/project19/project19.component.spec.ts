import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Project19Component } from "./project19.component";

describe("Project19Component", () => {
  let component: Project19Component;
  let fixture: ComponentFixture<Project19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Project19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Project19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
