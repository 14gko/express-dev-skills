const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    //new is necessary, look up what these keywords 
    //come from and what they do
    new: addSkill,
    add,
    delete: deleteSkill,
}

// first faram is the name of the file to look for 
function index(req, res){
    res.render('skills/index', {
        skills: Skill.getAll()
    });
};

//first param in render defines the html that we want to use in the views folder
function show(req, res){
    res.render('skills/show', {
        //accesses skill which is in models for the getone method and im not sure how req params works
        //left side for views, right is access model
        skill: Skill.getOne(req.params.id)
    })
}

function addSkill(req, res){
    res.render('skills/new')
}

function add(req, res){
    // console.log(req.body);
    Skill.add(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res){
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}
