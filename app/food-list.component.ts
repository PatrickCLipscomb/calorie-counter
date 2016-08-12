import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';
import { FoodComponent } from './food.component';
import { EditFoodComponent } from './edit-food.component';
import { NewFoodComponent } from './new-food.component';
import { CaloricFoodPipe } from './caloric-food.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onSelectedFood'],
  pipes: [CaloricFoodPipe],
  directives: [FoodComponent, NewFoodComponent, EditFoodComponent],
  template: `
  <div class="container row">
    <new-food (onSubmitNewFood)="createFood($event[0], $event[1], $event[2])"></new-food>
    <br>
    <label for="filter">Your Meals</label>
    <select name="filer" (change)="onFilter($event.target.value)">
      <option value="all" selected="selected">Show All</option>
      <option value="lowCalorie">Low Calorie Foods</option>
      <option value="highCalorie">High Calorie Foods</option>
    </select>
    <div class="grid grid-pad">
      <food-display *ngFor="#currentFood of foodList | caloricFood:filterFoods" [food]="currentFood" (click)="editFood(currentFood)" class="col-1-4"></food-display>
    </div>
    <button (click)="seeTotalCalories()">See Total Calories for your meals</button>
    <h3 *ngIf="calorieFlag === true">{{seeTotalCalories()}}</h3>
  </div>
  <div class="container">
    <edit-food *ngIf="selectedFood" [food]="selectedFood"></edit-food>
  </div>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  public onSelectedFood: EventEmitter<Food>;
  public calorieFlag: boolean;
  public filterFoods: string = "all";
  constructor() {
    this.onSelectedFood = new EventEmitter();
    this.calorieFlag = false;
  }
  editFood(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onSelectedFood.emit(clickedFood);
  }
  createFood(name: string, details: string, calories: string): void {
    var intCal = parseInt(calories);
    this.foodList.push(
      new Food(name, details, intCal, this.foodList.length)
    );
  }
  onFilter(filterOption) {
    this.filterFoods = filterOption;
  }
  seeTotalCalories() {
    this.calorieFlag = true;
    var calorieOutput = 0;
    this.foodList.forEach(function(food) {
      calorieOutput += food.calories;
    });
    setTimeout(() => { this.calorieFlag = false }, 2000);
    return calorieOutput;
  }

}
