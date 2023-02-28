//1
function printList(list){
    console.log(list.value);
    if(list.next != null)
        printList(list.next);
}

//2
function printList(list){
    
    let next = list;
    do{
        console.log(next.value);
        if(next.next === null) break
        else next = next.next;
    }while(true);

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