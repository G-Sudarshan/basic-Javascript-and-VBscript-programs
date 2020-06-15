/*
Objective

In this challenge, we learn about Arrays. Check out the attached tutorial for more details.

Task

Complete the getSecondLargest function in the editor below. It has one parameter: an array, , of  numbers. The function must find and return the second largest number in .

Input Format

Locked stub code in the editor reads the following input from stdin and passes it to the function:
The first line contains an integer, , denoting the size of the  array.
The second line contains  space-separated numbers describing the elements in .
*/

function getSecondLargest(nums) {
    // Complete the function

    for(let i = 0; i < nums.length ; i++)
    {
        for(let j = i+1; j < nums.length; j++)
        {
            let  temp;

          
          
            if(nums[j]==nums[i])
            {
                  if (j > -1) {
                  nums.splice(j, 1);
                }

            }
            else
            {

             if(nums[j]>nums[i])
             {
                 temp = nums[i];
                 nums[i] = nums[j];
                 nums[j] = temp;
             }
            }
            
        }
    }

    return nums[1];
}
