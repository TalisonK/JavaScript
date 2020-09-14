



const teste = (req, res) => {
    res.send({loged:true, id:req.userId, validate:true})
}


module.exports = { teste };