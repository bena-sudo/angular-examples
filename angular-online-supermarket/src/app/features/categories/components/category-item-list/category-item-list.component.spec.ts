import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryItemListComponent } from './category-item-list.component';

describe('CategoryItemListComponent', () => {
  let component: CategoryItemListComponent;
  let fixture: ComponentFixture<CategoryItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryItemListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
