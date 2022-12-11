const Skill = require('../models/skill')

module.exports = {
    index,
    show
}

function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll()
    });
};

//first param in render defines the html that we want to use in the views folder
function show(req, res){
    res.render('skills/show', {
        //accesses skill which is in models for the getone method and im not sure how req params works
        skills: Skill.getOne(req.params.id)
    })
}

console.log('req.params');