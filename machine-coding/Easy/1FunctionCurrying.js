const list = [
  {
    id: 1,
    name: 'Steve',
    email: 'steve@example.com',
  },
  {
    id: 2,
    name: 'John',
    email: 'john@example.com',
  },
  {
    id: 3,
    name: 'Pamela',
    email: 'pam@example.com',
  },
  {
    id: 4,
    name: 'Liz',
    email: 'liz@example.com',
  },
]

const filtering = (item)=>(name)=>item.name !== name
function filterName(list,name){
  return list.filter(filtering(name))
}

console.log(filterName(list,"John"))

///////
function multiply(a){
  return function(b){
    return a*b
  }
}
console.log(multiply(45)(2))
///

function addition(a){
  return function(b){
    if(b !== undefined){
      return addition(a+b)
    }
    return a
  }
}

console.log(addition(1)(2)(4)(6)(9)(9)(2)())