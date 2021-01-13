
const person:{
    name:string;
    age:number;
    hobbies:string[];
    role: [number,string]
} = { 
    name:'Musab Hamid',
    age: 24,
    hobbies:['basketball', 'gaming'],
    role:[2,'Developer']
}

let favoriteActivities: (string|number)[]

person.role = [0,'admin']

for(const hobby of person.hobbies){
    console.log(hobby.bold())
} 

//Left of beginning Enums seciton

