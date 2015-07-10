Nodeify Lambda Context
====================

About
--------------
Converts an AWS Lambda context object to a node callback.

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

