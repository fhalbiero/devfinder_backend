const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//o ideal é ter apenas um de cada para cada controller
//index, show, store, update, destroy

module.exports = {

    async index(req, res) {

        const devs = await Dev.find();

        return res.json(devs);  
    },


    async store(req, res) {
    
        const { github_username, techs, latitude, longitude } = req.body;
        
        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const techsArray = parseStringAsArray(techs);
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            //template string
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            //shot sintax
            dev = await Dev.create({
                name, 
                github_username,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }
    
        return res.json(dev);
    },

    async update(req, res) {

        return res.json({});
    },

    async destroy(req, res) {

        const dev = await Dev.deleteOne({
            _id : req.params.id
        }, err => console.log(err));

        return res.json(dev);
    }
}