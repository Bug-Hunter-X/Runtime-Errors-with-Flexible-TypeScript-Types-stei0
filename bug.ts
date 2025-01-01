function printArray(arr: any[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

const myArray: number[] = [1, 2, 3, 4, 5];

printArray(myArray); // This will work fine

const myStringArray: string[] = ['a', 'b', 'c'];

printArray(myStringArray); //This will also work fine

const myMixedArray: (number | string)[] = [1, 'a', 2, 'b'];
printArray(myMixedArray); //This will also work fine

const myAnyArray: any[] = [1, 'a', true, {name: 'John'}];
printArray(myAnyArray); // This will also work fine

// But consider this scenario:

function processData(data: number[]): number {
  let sum = 0;
  for (const num of data) {
    sum += num;
  }
  return sum;
}

const validData: number[] = [1, 2, 3, 4, 5];
const invalidData: (number | string)[] = [1, 2, '3', 4, 5];

console.log(processData(validData)); // This works correctly
console.log(processData(invalidData)); // This will throw a runtime error