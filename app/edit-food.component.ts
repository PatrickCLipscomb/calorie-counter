import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <div>
    <h3>Edit the selected meal</h3>
    <input [(ngModel)]="food.name" />
    <input [(ngModel)]="food.details" />
    <input [(ngModel)]="food.calories" />
  </div>
  `
})
export class EditFoodComponent{
  public food: Food;
}
