class Game{
    constructor() {}
    getState(){
        var gameref = database.ref("gameState")
        gameref.on("value",function(data){
            gameState=data.val()
        })
    }
    updateState(state) {
        database.ref("/") .update({
            gameState:state
        })
    }
    start() {
        if (gameState===0) {
            form=new Form()
            form.display()
        }
    }
}