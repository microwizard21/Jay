let student = [
    {
        age : 1,
        name : " albert",
        average : 19
    },


{
    age : 2,
    name : " rubert",
    average: 18
},

{
    age : 3,
    name : " herbert",
    average: 20
},

{
    age : 4,
    name : " nobert",
    average: 16
},

{
    age : 5,
    name : " ruben",
    average: 22
},

{
    age : 6,
    name : " rudolf",
    average: 23
},

{
    age : 7,
    name : " adolf",
    average: 21
},

{
    age : 8,
    name : " herman",
    average: 23
},

{
    age : 9,
    name : " james",
    average: 16
},

{
    age : 10,
    name : " john",
    average: 11
},
]


student.sort((a,b) => b.average - a.average);

for(let i = 0; i < student.length; i++){
    console.log (student[i])
}