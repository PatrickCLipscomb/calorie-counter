import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  inputs: ['food'],
  template: `
  <div>
    <h3>Edit the selected meal</h3>
    <br>
    <div class="form-inline">
    <label class="col-xs-3">Name</label>
    <label class="col-xs-4">Details</label>
    <label class="col-xs-3">Calories</label>
    </div>
    <div class="form-inline">
    <input [(ngModel)]="food.name" name="name" class="col-xs-3"/>
    <textarea [(ngModel)]="food.details" class="col-xs-4"></textarea>
    <input [(ngModel)]="food.calories" class="col-xs-3"/>
    </div>
  </div>
  `
})
export class EditFoodComponent{
  public food: Food;
}
