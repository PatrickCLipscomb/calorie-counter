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
  <select (change)="onFilter($event.target.value)">
    <option value="all" selected="selected">Show All</option>
    <option value="lowCalorie">Low Calorie Foods</option>
    <option value="highCalorie">High Calorie Foods</option>
  </select>
  <food-display *ngFor="#currentFood of foodList | caloricFood:filterFoods" [food]="currentFood" (click)="editFood(currentFood)"></food-display>
  <edit-food *ngIf="selectedFood" [food]="selectedFood"></edit-food>
  <new-food (onSubmitNewFood)="createFood($event[0], $event[1], $event[2])"></new-food>
  `
})
export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  public onSelectedFood: EventEmitter<Food>;
  public filterFoods: string = "all";
  constructor() {
    this.onSelectedFood = new EventEmitter();
  }
  editFood(clickedFood: Food): void {
    this.selectedFood = clickedFood;
    this.onSelectedFood.emit(clickedFood);
  }
  createFood(name: string, details: string, calories: number): void {
    this.foodList.push(
      new Food(name, details, calories, this.foodList.length)
    );
  }
  onFilter(filterOption) {
    this.filterFoods = filterOption;
  }
}
