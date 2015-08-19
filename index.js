'use strict';

module.exports = function nodeifyLambdaContext(context) {   
  return function lambdaHandler(err, response) {
  	if (context.done) {
  		if (err) {
			return context.done(err);  			
  		}
  		return context.done(response);  		
  	}

    if (err) {
      return context.fail(err);
    }
    context.succeed(response);    
  };
};