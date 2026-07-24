class Corvette {
    constructor(name, dc) {
        this.name = name;
        this.dc = dc;
    }

    DropDepthCharge() {
        if(this.dc > 3) {
            this.dc -= 2;
            console.log("Depth Charge Dropped");
            console.log("plink...plank......Boom!");
        } else {
            console.log("No Depth Charges left")
        }
    }

    SonarScan() {
        // 15 meters radius hahaha wow. Just kidding...
        let x = Math.floor(Math.random() * 15);
        if(x == 10) {
          console.log("Very Strong Signal");
          this.DropDepthCharge();
        }  else if (x > 7) {
          console.log("Strong Signal Detected");
        } else {
            console.log("Faint Signal Detected")
        }
    }
}

// HMS Bryony 
let bryony = new Corvette("Hms Bryony", 40)
bryony.SonarScan();
