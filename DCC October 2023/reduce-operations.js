var reductionOperations = function (nums) {
  const maxHeap = new MaxHeap(nums);
  let prev = null;
  let count = 0;
  let ans = 0;

  while (maxHeap.getLength()) {
    const curr = maxHeap.remove();
    if (curr !== prev && prev !== null) {
      ans += count;
    }

    count++;
    prev = curr;
  }

  return ans;
};