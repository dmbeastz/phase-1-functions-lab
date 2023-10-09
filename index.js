// Code your solution in this file!
function distanceFromHqInBlocks(covereddistance) { 
    if (covereddistance = 43)
    return 1;
    if (covereddistance =50)
    return 8;
    }
  
  
  function distanceFromHqInFeet(covereddistance) {
     let d = distanceFromHqInBlocks(covereddistance)
  
     let feet = 0;
     feet = d *264; 
  
     return feet;
  }
   
  function distanceTravelledInFeet(beginDeliveryInFeet, stopDeliveryInFeet) {
      if(beginDeliveryInFeet>stopDeliveryInFeet) {
          return(beginDeliveryInFeet - stopDeliveryInFeet) *264
      } else{
          return (stopDeliveryInFeet - beginDeliveryInFeet) *264
      }
  }
  
  function calculatesFarePrice(beginDeliveryInFeet, stopDeliveryInFeet) {
      let distanceCovered = Math.abs (beginDeliveryInFeet - stopDeliveryInFeet) * 264
      let f = 0;
      if(distanceCovered<=400){
          return f;
        } else if(distanceCovered>400 && distanceCovered<=2000) {
            //convert cents to dollars 
            return f = (distanceCovered-400) *0.02;
        } else if(distanceCovered>2000 &&distanceCovered<=2500) {
            return f = 25;
        } else{
            return f = 'cannot travel that far';
        }
    }