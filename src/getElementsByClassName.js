// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var element = arguments[1] || document.body;
  var result = arguments[2] || [];
  //var name = className.split(' ');

  if (element.classList && element.classList.contains(className)) {
  	result.push(element);
  }

  if (element.childNodes) {
  	var children = element.childNodes;
  	for (var i = 0; i < children.length; i++) {
  	  getElementsByClassName(className, children[i], result);
  	}
  }

  return result;
};
