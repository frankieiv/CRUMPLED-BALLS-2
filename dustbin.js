class dustbin{
    constructor(x,y){
        this.x=x
        this.y=y
        this.image = loadImage("dustbingreen.png")
        this.bottomWall = Bodies.rectangle(x, y, 200,20,{isStatic: true})
        World.add(world,this.bottomWall)
        this.rightWall = Bodies.rectangle(x - 100, y - 100, 20,100,{isStatic: true})
        World.add(world,this.rightWall)
        this.leftWall = Bodies.rectangle(x + 100, y - 100, 20,100,{isStatic: true})
        World.add(world,this.leftWall)
    }
 display(){
        var bottom=this.bottomWall.position
        var right=this.rightWall.position
        var left=this.leftWall.position
        push()
        translate(bottom.x,bottom.y)
        rectMode(CENTER)
        fill("lightblue")
        //rect(0,0,200,20)
        pop()

push()
        translate(right.x,right.y)
        rectMode(CENTER)
        fill("lightblue")
        //rect(0,0,20,200)
        pop()

push()
        translate(left.x,left.y)
        imageMode(CENTER)
        fill("lightblue")
        image(this.image,0,0,130,200)
        pop()
}
}