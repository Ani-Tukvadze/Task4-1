let participants = [{
    name: 'ani',
    age: 25
},
{
    name: 'mari',
    age: 17
},
{
    name: 'shota',
    age: 27
},
{
    name: 'gio',
    age: 16
}];
document.getElementById("test").innerHTML = participants.map(e => e.name ).join(', ');


function myFunction() {
let result = participants.filter(participant => participant.age > 18);
document.getElementById("test").innerHTML = result.map(e => e.name ).join(', ');
};
