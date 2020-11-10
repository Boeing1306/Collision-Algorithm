function isTouching( obj1, obj2){

    if(obj1.x - obj2.x <= obj2.width/2 + obj1.width/2 && 
  
      obj2.x - obj1.x <= obj2.width/2 + obj1.width/2 && 
      obj1.y - obj2.y <= obj2.height/2 + obj1.height/2 &&
      obj2.y - obj1.y <= obj2.height/2 + obj1.height/2){
     
        //obj2.shapeColor = "red";
    //obj1.shapeColor = "red";
    return true;
  
    }
    else{
      //obj2.shapeColor = "green";
    //obj1.shapeColor = "green";
    return false;
    }
  
  }
  
  function bounceOff(obj1,obj2){
   
    if(obj1.x - obj2.x <= obj1.width/2 + obj2.width/2 &&
      obj2.x - obj1.x <= obj1.width/2 + obj2.width/2){
  
      obj1.velocityX = -obj1.velocityX;
      obj2.velocityX = -obj2.velocityX;
    }
  
    if(obj1.y - obj2.y <= obj1.height/2 + obj2.height/2 &&
      obj2.y - obj1.y <= obj1.height/2 + obj2.height/2){
       
        obj1.velocityY = -obj1.velocityY;
        obj2.velocityY = -obj2.velocityY;
      }
  }