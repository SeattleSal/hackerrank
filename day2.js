// Task
// Given the meal price (base cost of a meal), tip percent (the percentage of the meal price being added as tip), and tax percent (the percentage of the meal price being added as tax) for a meal, find and print the meal's total cost. Round the result to the nearest integer.

// Example
// A tip of 15% * 100 = 15, and the taxes are 8% * 100 = 8. Print the value  and return from the function.

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

function solve(meal_cost, tip_percent, tax_percent) {
    // convert tip percent and tax percent to percentages
    // calculate tip = cost * tip
    // calculate tax = cost * tax
    // add amount and display two decimals
    let tip = meal_cost * (tip_percent * .01);
    let tax = meal_cost * (tax_percent * .01);
    console.log((meal_cost + tip + tax).toFixed());

}

solve(100, 15, 8)
solve(12.00, 20, 8)