let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

function topSalary(salaries){
    let max = 0;
    let maxName = null;

    for( let [name, salar] of Object.entries(salaries)){
        if(salar > max){ 
            max = salar;
            maxName = name;
        }
    }

    return maxName;

}