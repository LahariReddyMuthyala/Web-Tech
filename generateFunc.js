/* exported generate */
/* eslint-env browser */
/* eslint no-console */

function generate() {
    var low = 4, high = 7, nums = [], i, temp = low;
    for (i = 0; i < high - low + 1; i = i + 1) {
        nums[i] = temp;
        temp = temp + 1;
    }
    document.writeln(nums);
}
