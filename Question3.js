// Your quirky boss collects rare, old coins. 
// They found out you're a programmer and asked you to solve something they've been wondering for a long time. 
// Write a function that, given an amount of money and an array of coin denominations, 
// computes the amount2ber of ways to make the amount of money with coins of the available denominations. 
// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations: 

// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

function changePossibilities(amount1,amount2) {
    if (amount1 <= 0) {
        return "there are no possibilites";
    } 

    /*this is where the rescursive function will go to find the different 
        permutations of the changePossibilites*/
}

changePossibilities(4, [1, 2, 3])
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢