const skills = [
    {id: 001, skill: 'Javascript', learned: true},
    {id: 002, skill: 'HTML', learned: true},
    {id: 003, skill: 'CSS', learned: true},
    {id: 004, skill: 'Express', learned: false},
    {id: 005, skill: 'Python', learned: false}
]

module.exports = {
    getAll,
    getOne
}

function getAll(){
    return skills;
}

function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}