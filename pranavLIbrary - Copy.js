function touch(a,b){
    if(a.x-b.x<a.width/2+b.width/2&&b.x-a.x<a.width/2+b.width/2&&
      a.y-b.y<a.height/2+b.height/2&&b.y-a.y<a.height/2+b.height/2){
      return true
    }
    else{
      return false
    }
    
  }
  
  function bounce(c,d){
    if (c.x - d.x < d.width/2 + c.width/2
      && d.x -  c.x < d.width/2 + c.width/2) {
    c.velocityX = c.velocityX * (-1);
    d.velocityX = d.velocityX * (-1);
  }
  if (c.y - d.y < d.height/2 + c.height/2
    && d.y - c.y < d.height/2 + c.height/2){
    c.velocityY = c.velocityY * (-1);
    d.velocityY = d.velocityY * (-1);
  }
  }