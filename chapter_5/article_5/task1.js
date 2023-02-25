function camelize(str){
    let words = str.split('-');

    words = words.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)); 
    return words.join('');
}