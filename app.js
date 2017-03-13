console.log("Reality Check");

//console.log(document.getElementById('use-id-method'));
var idElement = document.getElementById('use-id-method');
console.log(idElement);

//changing HTML elements
idElement.innerHTML = "I haz been changed";


//console.log(document.getElementsByTagName('script'));
var tagName = document.getElementsByTagName('script');
console.log(tagName);

//sconsole.log(document.getElementsByClassName('use-class-method'));
var classMethod = document.getElementsByClassName('use-class-method');
console.log(classMethod);

//changing class elements
classMethod[1].innerHTML = "I haz been changed by Class name and array target!!!";