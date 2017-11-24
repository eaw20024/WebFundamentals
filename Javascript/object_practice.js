// var students = [ 
//      {
//         first_name:  'Michael', 
//         last_name : 'Jordan'
//     },
//     {
//          first_name : 'John', 
//          last_name : 'Rosales'
//     },
//     {
//          first_name : 'Mark', 
//          last_name : 'Guillen'
//     },
//     {
//         first_name : 'KB', 
//         last_name : 'Tonel'
//     }
// ]

// function student_list(obj){
//     let count = 0;
    
//     for(let student in students){
//         count = count + 1;
//         let name_length = students[student].first_name.length + students[student].last_name.length;
//         console.log(count + " - " + students[student].first_name.toUpperCase() + " " + students[student].last_name.toUpperCase() + " - " +  name_length)
//     }
// }

// student_list(students);

var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

function printThings(obj){
    for (var group in users) {
        console.log(group)
        for (var i = 0; i < users[group].length; i++) { //users["students"] -> users.students
            var fullname = users[group][i].first_name + users[group].last_name
            console.log(`${i} - ${users[group][i].first_name} ${users[group][i].last_name} - ${fullname.length}`)
        }
    }
}
printThings(users);