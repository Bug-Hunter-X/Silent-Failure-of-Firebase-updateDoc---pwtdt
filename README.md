# Silent Failure of Firebase updateDoc()

This repository demonstrates a subtle bug where the Firebase `updateDoc()` function fails silently.  Even with a `try...catch` block, no error is caught when the update fails due to security rules or other issues. This can lead to frustrating debugging sessions as no indication of the failure is apparent.

## Bug Description
The provided `bug.js` file shows an example of `updateDoc()` with error handling. Despite this, if the update fails (e.g., due to improperly configured Firebase rules), no error will be caught, and no error message will be logged. 

## Solution
The `bugSolution.js` file provides a workaround by adding more robust error checking with a logging mechanism to track if updates are failing.