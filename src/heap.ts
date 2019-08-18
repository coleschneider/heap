import { defaultCompareFunction } from './utils/compareFunction';

function Heap<T>(compareFunction = defaultCompareFunction) {
  function swap<T>(list: T[], firstIndex: number, lastIndex: number) {
    const temp = list[firstIndex];
    list[firstIndex] = list[lastIndex];
    list[lastIndex] = temp;
  }
  function getLeftChildIndex(parentIndex: number) {
    return 2 * parentIndex + 1;
  }
  function getRightChildIndex(parentIndex: number) {
    return 2 * parentIndex + 2;
  }
  /**
   *
   * @export
   * @template T - The data type of the list
   * @param {T[]} list
   * @param {number} [startIndex=0] - defaults to 0
   */
  function heapify<T>(list: T[], startIndex: number, endIndex: number) {
    let index, leftChild, rightChild;

    while (startIndex < endIndex) {
      index = startIndex;
      leftChild = getLeftChildIndex(startIndex);
      rightChild = getRightChildIndex(startIndex);
      if (leftChild < endIndex && compareFunction<T>(list[leftChild], list[index])) {
        index = leftChild;
      }
      if (rightChild < endIndex && compareFunction<T>(list[rightChild], list[index])) {
        index = rightChild;
      }
      if (index === startIndex) {
        return;
      }
      swap(list, startIndex, index);
      startIndex = index;
    }
  }

  /**
   * Transform a list into a heap, in-place algorithm
   * O(n) time, where n is the length of the list
   * @export
   * @template T
   * @param {T[]} list
   */
  function buildHeap<T>(list: T[]) {
    const startIndex = Math.floor(list.length / 2) - 1;
    for (let i = startIndex; i >= 0; i--) {
      heapify(list, i, list.length);
    }
  }

  function siftDown<T>(heap: T[], startIndex: number, position: number) {
    const newItem = heap[position];
    while (position > startIndex) {
      const parentIndex = (position - 1) >> 1;
      const parent = heap[parentIndex];
      if (compareFunction<T>(newItem, parent)) {
        heap[position] = parent;
        position = parentIndex;
        continue;
      }
      break;
    }
    heap[position] = newItem;
  }
  function push<T>(heap: T[], item: T) {
    heap.push(item);
    siftDown(heap, 0, heap.length - 1);
  }

  function peak<t>(heap: T[]) {
    if (heap.length === 0) {
      return null;
    }
    return heap[0];
  }
  function poll<T>(heap: T[]) {
    if (heap.length === 0) {
      return null;
    } else if (heap.length === 1) {
      return heap.pop();
    } else {
      const item = heap[0];
      // Make the last item the fist
      heap[0] = heap.pop() as T;
      siftDown(heap, 0, heap.length - 1);
      return item;
    }
  }
  return {
    heapify,
    buildHeap,
    peak,
    poll,
    push,
    swap,
    getLeftChildIndex,
    getRightChildIndex,
  };
}
export default Heap;
