var table;
var rad=0;
var bubbles=[];

function preload(){
    table = loadTable('Museum_Visitors.csv','header');
    //console.log(table)
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    loadData();

}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw(){
    background('#34373b');

    for (var i = 0; i<bubbles.length; i++){
        bubbles[i].display();
    }
}

function loadData(){
    var AA=[];
    for (var a = 0;a < table.getRowCount(); a++){
        var row = table.getRow(a);
        //AA[a] = row.get('Avila Adobe');
        var month = Number(row.get('Month'));
        var aa = Number(row.get('Avila Adobe'));

        //console.log(table.getRowCount())

       // for(var i=0;i<(AA[a]/100);i++){
       // console.log(AA[a]/100);
        bubbles[a]=new Bubble(random(300,1000),random(100,200),month, aa);
       // }
    }
}

class Bubble{
    constructor(tempX,tempY,tempMonth, tempAA){
        this.x = tempX;
        this.y = tempY;
        this.month=Number(tempMonth);
        this.aa = tempAA;
    }

    fall(){
        this.y+=10;
        this.x+=10;
        if (this.y>windowHeight){
            this.y=-this.y;
        }
        if(this.x>windowWidth){
            this.x=-this.x;
        }
    }

    display(){
        noStroke();
        if (this.month==1){
            fill('#2ecc71');
            console.log("this color is being read1");
        }
        if (this.month==2){
            fill('#3498db');
            //console.log("this color is being read2");
        }
        if (this.month==3){
            fill('#9b59b6');
            //console.log("this color is being read3");
        }
        if (this.month==4){
            fill('#6c7a89');
            //console.log("this color is being read4");
        }
        if (this.month==5){
            fill('#f2ca27');
            //console.log("this color is being read5");
        }
        if (this.month==6){
            fill('#e67e22');
            //console.log("this color is being read6");
        }
        if (this.month==7){
            fill ('#e74c3c');
            //console.log("this color is being read7");
        }
        if (this.month==8){
            fill('#cc3f5c');
            //console.log("this color is being read8");
        }
        if (this.month==9){
            fill('#99a6af');
            //console.log("this color is being read9");
        }
        if (this.month==10){
            fill('#DC4E1B');
            //console.log("this color is being read10");
        }
        if (this.month==11){
            fill('#93B3AF');
            //console.log("this color is being read11");
        }
        if (this.month==12){
            fill(255,0,13);
            //console.log("this color is being read12");
        }
        rotate(radians(this.month));
        for(let i=0; i<this.aa/20; i++){
            ellipse(random(0, this.aa/30), random(0, this.aa/150),random(5,15),random(5,15));
        }

    }

}