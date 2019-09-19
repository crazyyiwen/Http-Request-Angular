import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutDialogPopupComponent } from './put-dialog-popup.component';

describe('PutDialogPopupComponent', () => {
  let component: PutDialogPopupComponent;
  let fixture: ComponentFixture<PutDialogPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutDialogPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutDialogPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
