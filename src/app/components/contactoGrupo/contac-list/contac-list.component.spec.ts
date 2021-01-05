import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacListComponent } from './contac-list.component';

describe('ContacListComponent', () => {
  let component: ContacListComponent;
  let fixture: ComponentFixture<ContacListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
