const Manager = require('../lib/Manager');

test('Creates a new Manager object', () => {
    const testNewManager = new Manager('Mimi', 1234, 'mimzy414@gmail.com', 1234);

    expect(testNewManager.name).toEqual(expect.any(String));
    expect(testNewManager.email).toEqual(expect.any(String));
    expect(testNewManager.id).toEqual(expect.any(Number));
    expect(testNewManager.officeNumber).toEqual(expect.any(Number));
});

test('officeNumber() returns office number', () => {
    const testInputEl= 1234;
    const testNewManager = new Manager("Mimi", 1234, "mimzy414@gmail.com", testInputEl);
    console.log(testInputEl);
    expect(testNewManager.getOfficeNumber()).toBe(testInputEl);
});

test('\'Manager\' is returned when getRole() is called', () => {
    const testInputEl = 'Manager';
    const testNewManager = new Manager("Mimi", 1234, "mimzy414@gmail.com", testInputEl);
    console.log(testInputEl);

    expect(testNewManager.getRole()).toBe(testInputEl);
});