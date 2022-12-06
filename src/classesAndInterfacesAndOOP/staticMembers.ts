/*
Static proprty - A static property is a property thats belongs to a class not an object.
So we have only one instance of that property in memory.
*/

/*
Lets imagine we are building a ride sharing applicatin like uber, so people can use there phone and request a ride.

Lets talk about a feature of this app that it will keep track of active rides, so we gonna know how many active rides we currently have in our system
*/

/*
class Ride {
  activeRides: number = 0

  start(){
    this.activeRides++
  }

  stop(){
    this.activeRides--
  }
}

let ride1 = new Ride()
ride1.start()

let ride2 = new Ride()
ride2.start()

console.log(ride1.activeRides) // 1
console.log(ride2.activeRides) // 1

// we will see 1 altho we have 2 active rides right now, This is happening beacause here we dealing with two separate objects (ride1 and ride2) and each object in separete space in memory, so each object is independly tracking the active rides, thats why we have the issue. what we need here a single or global place where we can keep track of active rides And this is where we use static properties 
*/

class Ride {
  private static _activeRides: number = 0;

  start() {
    Ride._activeRides++;
  }

  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();

let ride2 = new Ride();
ride1.start();

// Now we will get 2 active rides
console.log(Ride.activeRides);
