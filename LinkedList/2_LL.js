   function Node(data){
     this.data = data;
     this.next = null;
   }

let getSize = function(head){
    let temp = head;
    let cnt = 0;
    while(temp!=null){
        temp = temp.next;
        cnt++;
    }
    console.log("SIZE OF LL ::", cnt);
    return cnt;
}


let insertAtPosition=function(head,value,k){
   
   if(k > getSize(head)){
        console.log('>>>>>>>>> K>SIZE');
       return head;
   }

   let nn = new Node(value);
   console.log('NEW NODE:: ',nn.data);

   if(k===0){
    console.log('>>>>>>>>> K=0');
       nn.next=head;
       head=nn;
       return head;
   }
   let prev = head;
   for(let i=1;i<=k-1;i++){
    prev = prev.next;
   }
   nn.next = prev.next;
   prev.next = nn;

   return head;
   
}

function printList(head){
    let temp = head;
    while(temp !== null){
        console.log('printList ',temp.data);
        temp = temp.next;
    }
}




// console.log(insertAtPosition([6,3,3,6,7,8,7,3,7],3,5));
let A = [7];
let B = 7; // Data
let C = 7; // K position

let head = new Node(A[0]);

console.log("LL before insertion::");
printList(head)

let headN = insertAtPosition(head,B,C)
console.log('LL after insertion:: ',headN.data);

printList(headN);