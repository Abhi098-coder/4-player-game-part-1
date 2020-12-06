class Form{
    constructor(){

    }
    display(){
        var button = createButton('play');
        button.position(100,150);
        var inputBox = createInput('name');
        inputBox.position(50,100);
        var heading = createElement('h1','car racing game');
        heading.position(50,0);
        button.mousePressed(function(){
            button.hide();
            inputBox.hide();
            heading.hide();
            var greeting = createElement('h2');
            greeting.html('Hello, player');
            greeting.position(200,200);
            var greeting2 = createElement('h2');
            greeting2.html('wait for the other players to join');
            greeting2.position(200,250);
        });
    }
}