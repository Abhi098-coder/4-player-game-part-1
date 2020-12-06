class Game{
    constructor(){
        
    }
    getState(){
        database.ref('gameState').on("value", function(data){
            gameState = data.val();
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }
}