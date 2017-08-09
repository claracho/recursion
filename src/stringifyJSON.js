// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';

  if (typeof(obj) === 'function' || typeof(obj) === 'undefined') {
  	return;
  }
  else if (Array.isArray(obj)) {
  	result += '[';
  	for (var i = 0; i < obj.length; i++) {
  	  result += stringifyJSON(obj[i]);
      if (i < obj.length-1)  {
  		result += ',';
  	  }
  	}
  	result += ']';
  }
  else if (typeof(obj) === 'object' && obj !== null) {
  	result += '{';
  	var key = Object.keys(obj);
  	for (var i = 0; i < key.length; i++) {
  	  if (typeof(obj[key[i]]) !== 'function' && typeof(obj[key[i]]) !== 'undefined') { 
  	    result += stringifyJSON(key[i]) + ':' + stringifyJSON(obj[key[i]]);
  	    if (i < key.length-1)  {
  	  	  result += ',';
  	    }
  	  }
  	}
  	result += '}';
  }
  else if (typeof(obj) === 'string') {
  	result += '"' + obj + '"';
  }
  else {
  	result += String(obj);
  }

  return result;
};
