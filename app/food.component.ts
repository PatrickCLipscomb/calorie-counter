import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <div class="container">
    <h5 class="module">{{food.name}}, {{food.details}}. Calories: {{food.calories}}</h5>
  </div>
  `
})
export class FoodComponent {
  public food: Food;
}
