// funcion que retorne el num max de una array

const maxArr = (nums) =>{
    let max = nums[0];
    for (let i = 1; i < nums.length; i++)
    {
        if (nums[i] > max) max = nums[i];
    }
    return max;
}

console.log(maxArr([3, 1, 7, 0, -90]))