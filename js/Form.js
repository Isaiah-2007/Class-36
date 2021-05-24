class Form{
    constructor(){}
    display() {
        var title=createElement('h2')
        title.html("Car Racer Game")
        title.position(450,100)
        var input=createInput("Name")
        var button=createButton("Start")
        input.position(450,260)
        button.position(580,320)
        var greeting=createElement('h3')
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name=input.value()
            greeting.html("Hello " + name)
            greeting.position(450,250)
        })
    }
}