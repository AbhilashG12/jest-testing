const {add,isAdult} = require("./server");


test("add 10+11 as 21",()=>{
	expect(add(10,11)).toBe(21);
})

test("checks adult",()=>{
	expect(isAdult(21)).toBe(true);
})
