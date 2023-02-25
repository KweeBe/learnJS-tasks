console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата 
console.log( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date){
    let now = new Date();

    let sec = now-date;

    let d = date;
     d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
        ].map(component => component.slice(-2));
    
    return sec < 1000 ? "прямо сейчас" :
        sec < 60000 ? `${sec/1000} сек. назад` : 
        sec < 360000 ? `${sec/1000/60} минут назад` :
        d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}