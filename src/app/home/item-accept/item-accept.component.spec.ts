import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAcceptComponent } from './item-accept.component';

describe('ItemAcceptComponent', () => {
  let component: ItemAcceptComponent;
  let fixture: ComponentFixture<ItemAcceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAcceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
