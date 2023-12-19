import { Component } from "@angular/core";



@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increasyBy(1)">+1</button>
    <button (click)="decrementBy(-1)">-1</button>
    <button (click)="ressetCounter()">Resset</button>

  `
})
export class CounterComponent {

  public counter: number = 10;

  increasyBy ( value: number ): void {
    this.counter +=value;
  }

  decrementBy (value: number): void {
    this.counter +=value;
  }

  ressetCounter (): void {
    this.counter = 10;
  }
}
