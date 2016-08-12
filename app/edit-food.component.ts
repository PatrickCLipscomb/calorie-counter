import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <div>
    <input [(ngModel="food.name")] />
    <input [(ngModel="food.details")] />
    <input [(ngModel="food.calories")] />
  </div>
  `
})
export class EditFoodComponent{
  public food: Food;
}
