const Intern = require('../lib/Intern');

test('\'Intern\' is returned when getRole() is called', () => {
    const testInputEl = 'Intern';
    const testNewIntern = new Intern("Mimi", 1234, "mimzy414@gmail.com", testInputEl);
    console.log(testInputEl);

    expect(testNewIntern.getRole()).toBe(testInputEl);
});

test('getSchool() returns school', () => {
    const testInputEl= 'UT of Austin';
    const testNewIntern = new Intern("Mimi", 1234, "mimzy414@gmail.com", testInputEl);
    console.log(testInputEl);
    expect(testNewIntern.getSchool()).toBe(testInputEl);
});