Nodeify Lambda
====================

About
--------------
Converts the context object on an AWS Lambda handler to a node callback.

Setup
--------------

```sh
npm install nodeify_lambda_context
```

Example
--------------

```js

	var nodeifyLambdaContext = require('nodeify_lambda_context');

	exports.handler = function(event, context) {
		var callback = nodeifyLambdaContext(context);
		// the context object is now a node callback!
		if (myAppHasAnError()) {
			// calls context.fail(err)
			callback(new Error('Boom!'));
		} else {
			// calls context.succeed()
			callback(null, 'yeah baby!');
		}		
	};

```

