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
    background('#34373b');

    for (var i = 0; i<bubbles.length; i++){
        bubbles[i].fall();
        bubbles[i].display();
    }
}

function loadData(){

    for (var a = 0;a < table.getRowCount(); a++){
        var row = table.getRow(a);
        var AA = row.get('Avila Adobe');
        var month = row.get('Month');
        bubbles[a]=new Bubble(random(0,200), random(0,200), random(2,10), AA/200, month);
    }
}

class Bubble{
    constructor(tempX,tempY,tempR,tempAA,tempMonth,speed){
        this.x = random(0,700);
        this.y = random(-500,200);
        this.r = random(2,10);
        this.AA = Number(tempAA);
        this.month=Number(tempMonth);
    }

    fall(){
        this.y+=this.month;
        if (this.y>700){
            this.y= -this.y;
        }
        if(mouseIsPressed){
            this.y= 0;
        }
    }

    display(){
        stroke(255,255,255);
        strokeWeight(3);
        if (this.month==1){
            fill('#2ecc71');
        }
        if (this.month==2){
            fill('#3498db');
        }
        if (this.month==3){
            fill('#9b59b6');
        }
        if (this.month==4){
            fill('#6c7a89');
        }
        if (this.month==5){
            fill('#f2ca27');
        }
        if (this.month==6){
            fill('#e67e22');
        }
        if (this.month==7){
            fill ('#e74c3c');
        }
        if (this.month==8){
            fill('#cc3f5c');
        }
        if (this.month==9){
            fill('#99a6af');
        }
        if (this.month==10){
            fill('#93B3AF');
        }
        if (this.month==11){
            fill('#DC4E1B');
        }
        if (this.month==12){
            fill(255,0,13);
        }
        rotate(radians(this.month));
        rect(this.x, this.y, this.month*10, this.AA);

    }

}