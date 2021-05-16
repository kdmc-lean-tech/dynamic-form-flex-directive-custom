import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FlexLayoutDirective } from "src/app/shared/directives/flex-layout.directive";
import {
  TestFlexLayoutColumnComponent,
  TestFlexLayoutNumberInputComponent,
  TestFlexLayoutRowComponent,
  TestFlexLayoutUndefinedComponent
} from "./__mocks__/tests-directive-flex-layout.component";
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";

fdescribe('FlexLayoutDirective', () => {
  let testComponentRow: TestFlexLayoutRowComponent;
  let testComponentColumn: TestFlexLayoutColumnComponent;
  let testComponentUndefined: TestFlexLayoutUndefinedComponent;
  let testComponentInputNumber: TestFlexLayoutNumberInputComponent;
  
  let fixtureComponentRow: ComponentFixture<TestFlexLayoutRowComponent>;
  let fixtureComponentColumn: ComponentFixture<TestFlexLayoutColumnComponent>;
  let fixtureComponentUndefined: ComponentFixture<TestFlexLayoutUndefinedComponent>;
  let fixtureComponentInputNumber: ComponentFixture<TestFlexLayoutNumberInputComponent>;
  
  let desRow: DebugElement;
  let desColumn: DebugElement;
  let desUndefined: DebugElement;
  let desInputNumber: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlexLayoutDirective,
        TestFlexLayoutRowComponent,
        TestFlexLayoutColumnComponent,
        TestFlexLayoutUndefinedComponent,
        TestFlexLayoutNumberInputComponent
      ]
    });
  });

  beforeEach(() => {
    fixtureComponentRow = TestBed.createComponent(TestFlexLayoutRowComponent);
    testComponentRow = fixtureComponentRow.componentInstance;
    fixtureComponentRow.detectChanges();
    desRow = fixtureComponentRow.debugElement.query(By.directive(FlexLayoutDirective));
  });

  beforeEach(() => {
    fixtureComponentColumn = TestBed.createComponent(TestFlexLayoutColumnComponent);
    testComponentColumn = fixtureComponentColumn.componentInstance;
    fixtureComponentColumn.detectChanges();
    desColumn = fixtureComponentColumn.debugElement.query(By.directive(FlexLayoutDirective));
  });

  beforeEach(() => {
    fixtureComponentUndefined = TestBed.createComponent(TestFlexLayoutUndefinedComponent);
    testComponentUndefined = fixtureComponentUndefined.componentInstance;
    fixtureComponentUndefined.detectChanges();
    desUndefined = fixtureComponentUndefined.debugElement.query(By.directive(FlexLayoutDirective));
  });

  beforeEach(() => {
    fixtureComponentInputNumber = TestBed.createComponent(TestFlexLayoutNumberInputComponent);
    testComponentInputNumber = fixtureComponentInputNumber.componentInstance;
    fixtureComponentInputNumber.detectChanges();
    desInputNumber = fixtureComponentInputNumber.debugElement.query(By.directive(FlexLayoutDirective));
  });

  describe('Testing Input Directive', () => {
    it('should create directive', () => {
      const directive = fixtureComponentColumn.debugElement.query(By.directive(FlexLayoutDirective));
      expect(directive).toBeTruthy();
    });
  });

  describe('Testing Row Property', () => {
    it('should have display flex', () => {
      const element = desRow.nativeElement as HTMLElement;
      expect(element.style.display).toEqual('flex');
    });

    it('should have flex-direction row', () => {
      const element = desRow.nativeElement as HTMLElement;
      expect(element.style.flexDirection).toEqual('row');
    });
  });

  describe('Testing Column Property', () => {
    it('should have display flex', () => {
      const element = desColumn.nativeElement as HTMLElement;
      expect(element.style.display).toEqual('flex');
    });

    it('should have flex-direction column', () => {
      const element = desColumn.nativeElement as HTMLElement;
      expect(element.style.flexDirection).toEqual('column');
    });
  });

  describe('Testing Undefined Input', () => {
    it('should have display flex', () => {
      const element = desUndefined.nativeElement as HTMLElement;
      expect(element.style.display).toEqual('');
    });

    it('should have flex-direction ""', () => {
      const element = desUndefined.nativeElement as HTMLElement;
      expect(element.style.flexDirection).toEqual('');
    });
  });

  describe('Testing Number Input', () => {
    it('should have display flex', () => {
      const element = desInputNumber.nativeElement as HTMLElement;
      expect(element.style.display).toEqual('');
    });

    it('should have flex-direction ""', () => {
      const element = desInputNumber.nativeElement as HTMLElement;
      expect(element.style.flexDirection).toEqual('');
    });
  });
});
