
function index(req, res){
    res.render('index', {
        title: 'Initial Page'
    })
}

module.exports = {
    index
}