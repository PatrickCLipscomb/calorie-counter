import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <div>
  <label>{{food.name}}, {{food.details}}, Calories: {{food.calories}}</label>
  </div>
  `
})
export class FoodComponent {
  public food: Food;
}
