import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div>
  <h3>Add a Meal</h3>
  <input placeholder="Meal Name" #newMeal>
  <input placeholder="Meal Details" #newDetail>
  <input placeholder="Meal Calories" type="number" #newCalories>
  <button (click)="addFood(newMeal, newDetail, newCalories)" class="btn btn-lg btn-success">Add</button>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter()
  }
  addFood(userMeal: HTMLInputElement, userDetail: HTMLInputElement, userCalories: HTMLInputElement){
    this.onSubmitNewFood.emit([userMeal.value, userDetail.value, userCalories.value]);
    userMeal.value = "";
    userDetail.value = "";
    userCalories.value = "";
  }
}
