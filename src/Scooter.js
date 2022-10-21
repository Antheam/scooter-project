class Scooter{
 
  constructor(station, user, serial, charge, isBroken = false, docked = true){
    this._station = station
    this._user = user
    this.serial = Math.floor(Math.random() * 10000)
    this._charge = charge
}

  get station(){

  }
rent(){
  if(this.isBroken = false && this.charge >20){
    throw new Error("Scooter low on battery, please charge.")
  }
}

dock(station){
  this.station = station
  if(this.station == ""){
    throw new Error("Docking station required!")
    this.docked = true
    this.user = ""
  }
}
async recharge(){
  this.charge = 100
}


async requestRepair(){
  this.Broken = false

 await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2 seconds

}

}


module.exports = Scooter
