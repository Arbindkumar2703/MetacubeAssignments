import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterOneComponentComponent } from './chapter-one-component.component';

describe('ChapterOneComponentComponent', () => {
  let component: ChapterOneComponentComponent;
  let fixture: ComponentFixture<ChapterOneComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChapterOneComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterOneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
