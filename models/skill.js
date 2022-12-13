const skills = [
    {id: 001, skill: 'Javascript', learned: true},
    {id: 002, skill: 'HTML', learned: true},
    {id: 003, skill: 'CSS', learned: true},
    {id: 004, skill: 'Express', learned: false},
    {id: 005, skill: 'Python', learned: false}
]

module.exports = {
    getAll,
    getOne,
    add,
    deleteOne,
}

function getAll(){
    return skills;
}

function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function add(skill){
    skill.id = Date.now() % 1000000;
    // New todos wouldn't be done :)
    skill.learned = false;
    skills.push(skill); //skill is the variable in new ejs under name
}

function deleteOne(id){
    console.log(typeof skills.id) // was working on this
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}