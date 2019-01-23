/* exported swap */
/* eslint-env browser */
/* eslint no-console */

function swap() {
    var nums = [], temp, pos1 = 1, pos2 = 2;
    nums = [10, 20, 30, 40, 50];
    temp = nums[pos1];
    nums[pos1] = nums[pos2];
    nums[pos2] = temp;
    document.writeln(nums);
    return;
}
