import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent } from './food-list.component';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Counting Calories for Fun</h1>
      <food-list [foodList]="foods"></food-list>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  constructor(){
    this.foods = [
      new Food("Pizza", "what I have when I need comfort", 700, 0),
      new Food("Hamburger", "what I have when its burger week", 800, 1),
      new Food("Pie", "what I have on special days", 900, 3),
      new Food("Snickers", "what I have when I've been frustrated all afternoon cause coding is hard", 250, 4)
    ];
  }
}
