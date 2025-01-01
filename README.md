# TypeScript Runtime Errors with Flexible Types

This repository demonstrates a common issue in TypeScript where using flexible types like `any[]` or union arrays can lead to runtime errors despite passing TypeScript compilation.  The core problem is that TypeScript's type checking doesn't guarantee runtime type safety for these scenarios. While the code compiles, the runtime behavior might not match expectations if you're not careful in how you handle the flexible types.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `tsc` to compile the TypeScript code.
4. Run `node bug.js`. Observe the runtime error.
5. Run `node bugSolution.js` to see a solution that avoids the error.

## Solution

The `bugSolution.ts` file demonstrates a safer way to handle potentially mixed data types. It checks for types within the loop before processing. This prevents the runtime error by handling different type scenarios explicitly.  This is a common pattern when handling data from external sources or user input where type certainty is not guaranteed.