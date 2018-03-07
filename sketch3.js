
var table;
var bubbles=[];

function preload(){
    table = loadTable('Museum_Visitors.csv','header');
}

function setup(){
    createCanvas(800,800);
    loadData();

}

function draw(){
    background(0);

    for (var i = 0; i<bubbles.length; i++){
        bubbles[i].display();
    }
}

function loadData(){
    for (var i = 0;i < table.getRowCount(); i++){
        var row = table.getRow(i);
        var ATIC = row.get('American Tropical Interpretive Center');
        var AA = row.get('Avila Adobe');
        var CA = row.get('Chinese American Museum');
    }

    bubbles[i]=new Bubble(random(0,800), random(0,800), ATIC/100, AA/100, CA/100);
}

class Bubble{
    constructor(tempX,tempY,tempR,tempATIC,tempAA,tempCA){
        this.x = tempX;
        this.y = tempY;
        this.r = tempR;
        this.ATIC = Number(tempATIC);
        this.AA = Number(tempAA);
        this.CA = Number(tempCA);
    }

    display(){
        ellipse(this.x, this.y, this.AA, this.AA);
        rect (this.x,this.y,this.ATIC, this.ATIC);
        ellipse(this.x,this.y,this.CA,this.CA);
    }

}