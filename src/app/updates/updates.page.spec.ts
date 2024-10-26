import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesPage } from './updates.page';

describe('Tab2Page', () => {
  let component: UpdatesPage;
  let fixture: ComponentFixture<UpdatesPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(UpdatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
