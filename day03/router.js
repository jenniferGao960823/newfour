function showIndex(req,res){
    res.end('index')
}
function showNew(req,res){
    res.end('new')
}
function showAbout(req,res){
    res.end('about')
}
module.exports={
    showIndex:showIndex,
    showNew:showNew,
    showAbout:showAbout
}