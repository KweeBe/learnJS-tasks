//1
// function printList(list){
//     if(list.next != null)
//         printList(list.next);
//     console.log(list.value);
// }

//2
function printList(list){
    
    let arr = [];
    let next = list;
    do{
        arr.push(next.value);
        next = next.next;
    }while(next);

    for (let i = arr.length - 1; i >= 0; i--) {
      console.log( arr[i] );
    }

}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};
printList(list);