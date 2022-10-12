export default class CartController{


    getAll=async(req,res)=>{
        if(req.session.cart){
            res.send(req.session.cart)
            res.end()
        }
        else{
            req.session.cart=[]
            res.send(req.session.cart)
            res.end()
        }
    }


    addItem=async(req,res)=>{
        let item=req.body
        req.session.cart.push(item)
        res.send.status(200)
        res.end()
    }

    removeItem=async(req,res)=>{
        let itemId=req.params.id
        req.session.cart=req.session.cart.filter((currentItem)=>(currentItem.id !=itemId))
        res.send.status(200)
        res.end()

    }

    updateItem=async(req,res)=>{
        let itemId=req.params.id
        let item=req.body
        req.session.cart=req.session.cart.filter((currentItem)=>(currentItem.id !=itemId))
        req.session.cart.push(item)
        res.send.status(200)
        res.end()

}