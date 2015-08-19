#Nodeify Lambda Context

##This module is not needed anymore. Lambda context objects have a done callback that behaves the same as a node callback. 

Converts an AWS Lambda context object to a node callback.

[![Build Status](https://semaphoreci.com/api/v1/projects/6174d74a-3a33-49d8-ae1f-50acd07757e2/483533/badge.svg)](https://semaphoreci.com/lp/nodeify_lambda_context) 


#Setup

```sh
npm install nodeify_lambda_context
```

#Example

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

