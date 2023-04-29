export class Meal{
    meals:TypeMeal[] = [];
    constructor(meals:TypeMeal[]){
        this.meals = meals
    }
}
export enum TypeMeal{
    BABY_MEAL = 'BABY MEAl',
    VEGETABLE = 'BEGETABLE'
}