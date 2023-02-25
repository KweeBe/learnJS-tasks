console.log(getSecondsToTomorrow());

function getSecondsToTomorrow(){
    let date = new Date();

    let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);

    let diff = tomorrow - date;
    return Math.round(diff / 1000); 

}