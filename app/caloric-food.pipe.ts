import { Pipe, PipeTransform } from 'angular2/core';
import { Food } from './food.model';

@Pipe({
  name: "caloricFood",
  pure: false
})
export class CaloricFoodPipe implements PipeTransform {
  transform(input: Food[], args) {
    var calorieAmount = args[0];
    if (calorieAmount === "lowCalorie") {
      return input.filter(function(food) {
        return food.calories <= 500;
      });
    } else if (calorieAmount === "highCalorie") {
      return input.filter(function(food) {
        return food.calories > 500;
      });
    } else {
      return input;
    }
  }
}
