function findMatching(drivers, name){
    const newDrivers = drivers.filter((driver) => {
       return driver.toLowerCase() === name.toLowerCase();
   });
   if (newDrivers) {
    return newDrivers;
   }
      else{
        return [];
      }


    }
    
    function fuzzyMatch(drivers, startingLetters){
     const newDrivers = drivers.filter((driver) => {
        return driver.startsWith(startingLetters);
     });

       return newDrivers;

    }

    function matchName(drivers, name) {
     const newDrivers = drivers.filter((driver) => {
        return driver.name === name;
     });
      return newDrivers;

    }
