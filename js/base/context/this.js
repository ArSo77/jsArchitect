// .call .apply .bind


function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession +".");
}
// theFunction.apply(valueForThis, arrayOfArgs)
// theFunction.call(valueForThis, arg1, arg2, ...)
theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");
theFunction.call(undefined, ...["Matthew", "physicist"]); // used with the spread operator
