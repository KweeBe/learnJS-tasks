console.log(getSecondsToday());

function getSecondsToday() {
    let d = new Date();
  
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = d - today; 
    return Math.round(diff / 1000); 
  }
  