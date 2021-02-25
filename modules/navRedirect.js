module.exports = {
    findDirection: function(req, res) {
        const redirect = req.params.navDirection;
        const directions = req.app.locals.directions;
        const foundedDirection = directions.find(direction => redirect == direction.pathing);
        if(foundedDirection){
            res.render(`${redirect}`, {cssFile: `${redirect}.css`});
        } else {
            res.status(404).render('error404', { cssFile: 'error404.css' });
        }
    }
}