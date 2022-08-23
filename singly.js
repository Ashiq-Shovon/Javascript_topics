class Node{
    constructor(val, next){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

class LinkedList{

    constructor(data){
        this.head = new Node(data);
        this.current =   this.head;
    }
   
    insertData = (val) =>{
    
    
    
    this.current.next = new Node(val);
    this.current = this.current.next;
    
}
    printData =() =>{
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
        
    }
}



var ll = new LinkedList(20);
ll.insertData(10);
ll.insertData(110);
ll.insertData(110);


ll.printData();