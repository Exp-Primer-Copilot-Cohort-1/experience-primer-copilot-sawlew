function skillsMember() {
    var member = {
        name: 'John',
        age: 25,
        skills: ['JavaScript', 'CSS', 'HTML'],
        address: {
            city: 'New York',
            country: 'USA'
        }
    };

    var memberJSON = JSON.stringify(member);
    console.log(memberJSON);
}