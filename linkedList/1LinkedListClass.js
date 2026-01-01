class Node{
  constructor(value){
    this.head = value
    this.next = null
  }
}


class LinkedList{

  constructor(value){
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  push(value){
    let NewNode = new Node(value)

    if(!this.head){
      this.head = NewNode
      this.tail = NewNode
    }

    this.tail.next = NewNode
    this.tail = NewNode
    this.length++
  }

  pop(){ //removes the last node and shift the tail
    if(!this.head){
      return undefined
    }

    let temp = this.head
    let prev = this.head

    while(temp.next){
      prev = temp
      temp = prev.next
    }

    this.tail = prev
    this.tail.next = null
    this.length--

    if(this.length===0){
      this.head = null
      this.tail = null
    }

    return null
  }

  unshift(value){ //add a new node at the beginning
    let newNode = new Node(value)

    if(!this.head){
      this.head = newNode
      this.tail = newNode
    }

    newNode.next = this.head
    this.head = newNode
    this.length++

    return this
  }

  shift(){
    if(!this.head){
      undefined
    }
    let temp = this.head
    this.head = this.head.next
    temp.next = null
    this.length--

    if(this.length==0){
      this.tail = null
    }
  }

  getFirst(){
    return this.head
  }

  getLast(){

    if(!this.head){
      return undefined
    }

    let temp = this.head

    while(temp){
      if(!temp.next){
        return temp
      }
      temp = temp.next
    }
  }

  get(index){
    let temp = this.head
    let counter = 0

    while(temp){
      if(counter === index){
        return temp
      }
      counter++
      temp = temp.next
    }

    return null
  }

  set(index,value){
    let temp = this.head
    let counter = 0

    while(temp){
      if(counter === index){
        temp.value = value
      }
      counter++
      temp = temp.next
    }
    return true
  }

  insert(index,value){
    if(index ===0){
      return this.unshift(value)
    }
    if(index === this.length){
      return this.push(value)
    }

    let newNode = new Node(value)
    const ourNode = this.get(index-1)
    newNode.next = ourNode.next
    ourNode.next = newNode
    // let temp = this.head
    // let counter = 0

    // while(temp){
    //   if(counter === index){
    //     temp.next = newNode
    //     newNode.next = temp.next
    //   }
    //   counter++
    //   temp = temp.next
    // }
    return true
  }

  size(){
    let counter = 0
    let temp = this.head

    while(temp){
      counter++
      temp = temp.next
    }
    
    return counter
  }

  clear(){
    // while(this.length){
    //   this.pop()
    // }
    // this.length--
    // return true
    this.head = null
  }
}

const myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)
myLinkedList.pop()
myLinkedList.unshift(0)
console.log("-------------------")
myLinkedList.shift()
myLinkedList.getFirst()
const last = myLinkedList.getLast()
const update = myLinkedList.set(3,44)
const random = myLinkedList.get(3)
const inserted = myLinkedList.insert(1,"hello")
const size = myLinkedList.size()
console.log(myLinkedList)
myLinkedList.clear()
console.log("-------------------")
console.log(myLinkedList)
