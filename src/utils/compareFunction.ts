/**
 * Default function to use if none is passed into buildMaxHeap
 * The Default structure assumes a minHeap implemeentation
 * @export
 * @template T
 * @param {T} a - leftChild
 * @param {T} b - parent
 */
export function defaultCompareFunction<T>(a: T, b: T) {
  return a <= b;
}
type CompareFunction<T> = (a: T, b: T) => boolean;
export type OptionalCallbacks<T> = CompareFunction<T> | { comparator: CompareFunction<T> };
