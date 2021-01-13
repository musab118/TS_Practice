var person = {
    name: 'Musab Hamid',
    age: 24,
    hobbies: ['basketball', 'gaming']
};
var favoriteActivities;
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.bold());
}
