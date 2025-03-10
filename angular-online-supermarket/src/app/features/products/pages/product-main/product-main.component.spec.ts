import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMainComponent } from './product-main.component';

describe('ProductMainComponent', () => {
  let component: ProductMainComponent;
  let fixture: ComponentFixture<ProductMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductMainComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
