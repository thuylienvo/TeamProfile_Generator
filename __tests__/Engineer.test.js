const Engineer = require('../lib/Engineer');

// test('Creates a new engineer object', () => {
//     const engineer = new Engineer('Mimi', 'mimzy414@gmail.com');

//     expect(engineer.name).toBe('Mimi');
//     expect(engineer.email).toBe(expect.anything());
//     expect(engineer.id).toEqual(expect.any(Number));
// });

test('Retrieve GitHub via getGitHub()', () => {
    const gitHub = 'thuylienvo';
    const testNewEngineer = new Engineer("Mimi", 1234, "mimzy414@gmail.com", gitHub);

    expect(testNewEngineer.getGitHub()).toBe(gitHub);
});   

test('\'Engineer\' is returned when getRole() is called', () => {
    const testRole = 'Engineer';
    const testNewEngineer = new Engineer("Mimi", 1234, "mimzy414@gmail.com", testRole);

    expect(testNewEngineer.getRole()).toBe(testRole);
});   
