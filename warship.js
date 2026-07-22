const warship = {
   type:"Corvette",
   name:"Nepty-II",
   isReloaded:false,
   ammunition:20,

   reloadgun() {
     if(this.isReloaded != true) {
        this.isReloaded = true
        console.log("Gun is Reloaded");
        this.ammunition -= 1;
     } else if(this.ammunition == 0) { 
       console.log("Out of ammunition")
     } else {
        console.log("Gun is already reloaded");
     }
   },

   fire() {
     if(this.isReloaded != true) {
        console.log("Reload the gun first")
     } else {
        this.isReloaded = false;
        console.log("2CM Flak gun has been fired")
     }
   }
}

warship.reloadgun();
warship.fire();
