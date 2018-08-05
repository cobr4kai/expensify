const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('Should be name and exclamation', () => {
    const greeting = generateGreeting('Maneesh');
    expect(greeting).toBe(`Hello Maneesh!`);
});