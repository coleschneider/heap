import Heap from '../heap';

describe('Heap', () => {
  describe('Min Heap', () => {
    it('should build a min heap by default', () => {
      const { buildHeap } = Heap();
      const arr = [12, 11, 13, 5, 6, 7];
      buildHeap(arr);
      expect(arr).toEqual([5, 6, 7, 11, 12, 13]);
    });
    it('should be able to maintain the heap property when new items are push into it', () => {
      const { buildHeap, push } = Heap();
      const arr = [12, 11, 13, 5];
      buildHeap(arr);
      expect(arr).toEqual([5, 11, 13, 12]);
      push(arr, 6);
      expect(arr).toEqual([5, 6, 13, 12, 11]);
      push(arr, 7);
      expect(arr).toEqual([5, 6, 7, 12, 11, 13]);
    });
  });
  describe('Max Heap', () => {
    it('should build a max heap if a comparator function is passed into it', () => {
      const { buildHeap } = Heap((a, b) => a >= b);
      const arr = [12, 11, 13, 5, 6, 7];
      buildHeap(arr);
      expect(arr).toEqual([13, 11, 12, 5, 6, 7]);
    });
  });
});
