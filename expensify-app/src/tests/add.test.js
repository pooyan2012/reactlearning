const add = (a, b) => a + b;
const generateGreeting=(name='Anonymous')=>`Hello ${name}!`

test("1+2=3", () => {
  expect(add(1, 2)).toBe(3);
});

test("greeting test",()=>{
    expect(generateGreeting('Pooyan')).toBe('Hello Pooyan!')
})


test("greeting test without argument",()=>{
    expect(generateGreeting()).toBe('Hello Anonymous!')
})