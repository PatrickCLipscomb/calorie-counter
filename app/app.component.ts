import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodListComponent } from './food-list.component';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <food-list [foodList]="foods"></food-list>
    </div>
  `
})
export class AppComponent {
  public foods: Food[];
  title: "Counting Calories for Fun"
  constructor(){
    this.foods = [
      new Food("Pizza", "what I have when I need comfort", 700, 0),
      new Food("Hamburger", "what I have when its burger week", 800, 1),
      new Food("Pie", "what I have on special days", 900, 3)
    ];
  }
}
