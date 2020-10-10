let findTheOldest = function(people) {
    let oldestPerson = people.reduce((eldest, person) => {
        let eldestAge = eldest[1];

        let personDeath = person.yearOfDeath ?? new Date().getFullYear();
        let personAge = personDeath - person.yearOfBirth;
        if (personAge > eldestAge) {
            return [person, personAge];
        }
        return eldest;
    }, [{}, -Infinity]);

    return oldestPerson[0];
}

module.exports = findTheOldest
