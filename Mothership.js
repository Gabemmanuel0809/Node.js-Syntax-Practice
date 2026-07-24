const Mothership = {
    Health: 100000,
    Shield: 100000,
    LaserReady: false,
    
           Destroyer: {
                Deployed: false,
                Health:10000,
                Shield:500,
                PhotonRockets:100,

                FireRockets() {
                    if(this.Deployed == true) {
                      if(this.PhotonRockets == 0) {
                          console.log("Out of rockets");
                      } else {
                          this.PhotonRockets -= 2;
                          console.log("Firing Rockets");
                      }
                    } else {
                        console.log("Not in combat yet")
                    }
                },

                CallForHome() {
                    if(this.Deployed == true) {
                      console.log("Signal Has been send");
                    } else {
                      console.log("Not yet deployed");
                    }  
                }
            },

    PrepareLaser() {
       if(this.LaserReady == true) {
          console.log("Already has been prepared");
       } else {
          this.LaserReady = true;
          console.log("Preparation Complete");
       }
    },

    FireLaser() {
        if (this.LaserReady != true) {
            console.log("Laser is not prepared");
        } else {
            this.LaserReady = false;
            console.log("A powerful laser has been fired");
        }
    },

    SendOutDestroyer() {
        if (this.Destroyer.Deployed != true) {
            this.Destroyer.Deployed = true;
            console.log("Destroyer has been send out");
        } else {
            console.log("Destroyer is already rampaging out there");
        }
    },

    SelfDestruct() {
        delete Mothership.Health;
        delete Mothership.Shield;
        delete Mothership.LaserReady;
    }
}

Mothership.PrepareLaser();
Mothership.FireLaser();
Mothership.SendOutDestroyer();
Mothership.SelfDestruct();
Mothership.Destroyer.FireRockets();
Mothership.Destroyer.CallForHome();
