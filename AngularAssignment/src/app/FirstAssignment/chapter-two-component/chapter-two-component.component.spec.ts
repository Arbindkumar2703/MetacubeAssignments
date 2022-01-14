import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTwoComponentComponent } from './chapter-two-component.component';

describe('ChapterTwoComponentComponent', () => {
  let component: ChapterTwoComponentComponent;
  let fixture: ComponentFixture<ChapterTwoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterTwoComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterTwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
