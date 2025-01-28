# Express.js - req.body undefined despite using express.json()

This repository demonstrates a common issue in Express.js applications where `req.body` remains undefined even after applying the `express.json()` middleware.  The problem typically arises from incorrect middleware placement or configuration. The `bug.js` file showcases the flawed implementation, and `bugSolution.js` provides a corrected version.

## Problem Description
The `bug.js` file attempts to parse a JSON request body using `express.json()`. However, due to a placement error or other configuration issues (potentially mismatched Content-Type header), `req.body` remains undefined in the request handler.

## Solution
The `bugSolution.js` file offers a solution to the issue. The core fix involves correctly placing and configuring the `express.json()` middleware before any route handlers that intend to access the JSON request body.

This issue often occurs when additional middleware is placed *before* `express.json()`, interfering with the body parsing. The example highlights this by demonstrating the correct order.