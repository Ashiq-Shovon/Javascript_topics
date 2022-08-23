class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        
        this.head = null;
        this.size = 0;
    }

    //Insert first node

    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    //Insert last node

    //Insert at index


    //Get at index


    //Remove at index


    //clear list

    // print list data

    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
// ll.insertFirst(400);
// ll.printListData();
// console.log(ll);



//filter, map, forEach, find, reduce, include, some, any
//includes
const items = [
    {item : "book", price : 30 },
    {item : "pen", price : 20 },
    {item : "tv", price : 130 },
    {item : "car", price : 70 },
    {item : "burger", price : 90 },
    {item : "bike", price : 40 }

];

const lowItem = items.filter((item) => {
    return item.price <= 70;
})

console.log(lowItem);

const valueOfItem = lowItem.forEach((item) =>{
    console.log(`${item.item} == ${item.price}`);
})

const mapItem = items.map((item) =>{
    return `${item.item} = ${item.price}`;
})
console.log(mapItem[0]);