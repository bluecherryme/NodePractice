var user = require('../user.js');

module.exports = {

getName : function(req,res){
    res.json({name:user.name});
},

getLocation : function(req,res){
    res.json({location:user.location});
},

getOccupations : function(req,res){
    res.json({occupations:user.occupations});
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

}