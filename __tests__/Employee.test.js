const Employee = require('../lib/Employee')

test('Get name input from constructor argument', () => {
    const testInputEl = 'Mimi'
    const testNewEmployee = new Employee(testInputEl, 1234, 'mimzy414@gmail.com');

    expect(testNewEmployee.name).toBe(testInputEl);
}); 

test('Get email input from constructor argument', () => {
    const testInputEl = 'mimzy414@gmail.com'
    const testNewEmployee = new Employee('Mimi', 1234, testInputEl);

    expect(testNewEmployee.email).toBe(testInputEl);
}); 

test('Get id input from constructor argument', () => {
    const testInputEl = 1234
    const testNewEmployee = new Employee('Mimi', testInputEl, 'mimzy414@gmail.com');

    expect(testNewEmployee.id).toBe(testInputEl);
}); 

test('getName() returns name', () => {
    const testInputEl = 'Employee';
    const testNewEmployee = new Employee(testInputEl, 1234, 'mimzy414@gmail.com');

    expect(testNewEmployee.getName()).toBe(testInputEl);
}); 

test('getId() returns id number', () => {
    const testInputEl = '1234';
    const testNewEmployee = new Employee('Mimi', testInputEl, 'mimzy414@gmail.com');

    expect(testNewEmployee.getId()).toBe(testInputEl);
}); 

test('getEmail() returns email', () => {
    const testInputEl = 'mimzy414@gmail.com';
    const testNewEmployee = new Employee('Mimi', 1234, testInputEl);

    expect(testNewEmployee.getEmail()).toBe(testInputEl);
});

test('\'Employee\' is returned when getRole() is called', () => {
    const testRole = 'Employee';
    const testNewEmployee = new Employee('Mimi', 1234, 'mimzy414@gmail.com', testRole);

    expect(testNewEmployee.getRole()).toBe(testRole);
}); 