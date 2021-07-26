class Form{
    construtor(){

    }
    display(){
        var input = createInput("enter name")
        input.position(200,200);
        var button = createButton("Start");
        button.position(200,350);
        var label = createElement("h2");
        label.html("Car Racing Game");
        label.position(200,100);
        button.mousePressed(function (){
            var name = input.value();
            
            var message = createElement("h4");

            message.html("hello "+name + " Waiting for players to join");
            message.position(200,350);
            input.hide();
            button.hide();
            
        })
    }
}