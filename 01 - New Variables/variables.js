function setWidth() {
	var width = 100; // Function Scope or not in function - global scoped - available in window
}
setWidth();
console.log(width); // Error - only available in function unless returned or defined outside of function

