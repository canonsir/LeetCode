/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const array = [...nums1, ...nums2].sort((a, b) => a - b)
  const len = array.length
  const middle = len / 2
  if (len % 2 === 0) return (array[middle - 1] + array[middle]) / 2
  else return array[Math.floor(middle)]
}