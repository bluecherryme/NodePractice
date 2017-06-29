var user = require('../user.js');
var skills = require('../skillz.js');
var secrets = require('../secrets');

module.exports = {

getName : function(req,res){
    res.json({name:user.name});
},

getLocation : function(req,res){
    res.json({location:user.location});
},

getOccupations : function(req,res){
    if (req.query.order==='desc'){
        res.json({occupations:user.occupations.reverse()});
    } else if (req.query.order==='asc'){
        res.json({occupations:user.occupations.sort()});
    }
    else{
    res.json({occupations:user.occupations});
    }
},

getOccupationsLatest : function(req,res){
    res.json({latestOccupation:user.occupations[user.occupations.length-1]});
},

getHobbies : function(req,res){
    res.json({hobbies:user.hobbies});
},

getHobbiesType : function(req,res){
    var matchHobbies = user.hobbies.filter((hobby)=>{
        return hobby.type === req.params.type
    });
    res.json({hobbies:matchHobbies});
},

getFamily : function(req,res){
    res.json({family:user.family});
},

getFamilyGender : function(req,res){
    var matchGender = user.family.filter((memb)=>{
        return memb.gender === req.params.gender
    });
    res.json({family:matchGender});
},

getRestaurants : function(req,res){
    if (req.query.rating){
        responseArray = user.restaurants.filter((restaurant)=>{
            return restaurant.rating >= req.query.rating
        });
        res.json({restaurants:responseArray})
    } else{
        res.json({restaurants:user.restaurants});
    }
},

getRestaurantsName : function(req,res){
    console.log(req.params);
    var matchName = user.restaurants.filter((restaurant)=>{
        return restaurant.name === req.params.name
    });
    res.json({restaurant:matchName});
},

putName: function(req,res){
    user.name = req.body.name;
    res.status(200).json(user.name);
},

putLocation: function(req,res){
    user.location = req.body.location;
    res.status(200).json(user.location);
},

postHobbies: function(req,res){
    console.log(req.body)
    user.hobbies.push(req.body.hobby);
    res.status(200).json(user.hobbies);
},

postOccupations: function(req,res){
    console.log(req.body)
    user.occupations.push(req.body.occupation);
    res.status(200).json(user.occupations);
},

getSkills: function(req,res){
    if (req.query.experience){
        var skillSort = skills.filter((skill)=>{
            return skill.experience === req.query.experience;
        });
        res.status(200).json(skillSort);
    } else{
        res.status(200).json(skills);
    }
},

postSkills: function(req,res){
    skills.push({
        id:req.id,
        name: req.body.name,
        experience: req.body.experience
    });
    res.status(200).json(skills);
},

getSecret: function(req,res){
    res.status(200).json(secrets);
}



}