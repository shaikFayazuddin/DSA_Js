class MyArray {

  constructor(){
    this.length = 0
    this.data = {}
  }

  push(item){
    this.data[this.length] = item
    this.length++
    return this.length
  }

  get(index){
    return this.data[index]
  }

  pop(){
    const lastItem = this.data[this.length -1]
    delete this.data[this.length -1]
    this.length--
    return lastItem
  }

  shift(){
    const  firstItem = this.data[0]

    //increasing the index by one
    for(let i=0; i<this.length;i++){
      this.data[i] = this.data[i+1] //removing the first index by reassigning the adjacent value and then the last item will be deleted
    }
    delete this.data[this.length-1]
    this.length--
    return this.data
  }

  deleteByIndex(index){
    //my soln
    // delete this.data[index]
    // this.length--
    // for(let i = index;i<this.length+1;i++){
    //   console.log(this.data[index+1])
    //   this.data[i] = this.data[i+1]
    // }
    // delete this.data[this.length]
    // return this.data

    const toBeDeletedItem = this.data[index]
    for(let i = index;i<index.length-1;i++){
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length-1]
    this.length--
    return toBeDeletedItem
  }
}

const NewArray = new MyArray()
// console.log(NewArray)

NewArray.push("Hello")
NewArray.push("India")
NewArray.push("Mumbai")
NewArray.push("Kerala")
NewArray.push("Chennai")
NewArray.push("Delhi")
// console.log(NewArray.push("World"))

console.log(NewArray)

// console.log(NewArray.get(1)) //should return hello

// console.log(NewArray.pop())
// console.log(NewArray)
// console.log(NewArray.shift())
console.log(NewArray.deleteByIndex(2))
console.log(NewArray)