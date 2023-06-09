let task1 = {name: 'Sweep the floor', priority: 'Low', status: false}

let task2 = {name: 'Get groceries', priority: 'Medium', status: false}

let task3 = {name: 'Make dinner', priority: 'High', status: false}

let tasks = [task1, task2, task3]

// function addTask(task){
//   tasks.push(task)
// }

const addTask = task => {
  tasks.push(task)
}

addTask({name: 'Take out the trash', priority: 'Medium', status: false})

console.log(tasks)

// function deleteTask(task){
//   for(let i = 0; i < tasks.length; i ++){
//     console.log(tasks[i])
//     if(task === tasks[i].name){
//        tasks.splice([i], 1)
//        console.log('Task deleted')
//        return
//      }
//   }

//   console.log('That task was not in the array')
// }

const deleteTask = (task) => {
  function deleteTask(task){
    for(let i = 0; i < tasks.length; i ++){
      console.log(tasks[i])
      if(task === tasks[i].name){
         tasks.splice([i], 1)
         console.log('Task deleted')
         return
       }
    }
  
    console.log('That task was not in the array')
  }
}

deleteTask('Take out the trash')

console.log(tasks)



// const incompleteTasks = tasks.filter((task) => {
//   if(!task.status){
//     return true
//   }else{
//     return false
//   }
// })

const incompleteTasks = tasks.filter((task) => !task.status)

console.log(incompleteTasks)


// for(let i = 0; i < tasks.length; i++) {
//   let string = tasks[i]

//   if(tasks[i] === 'Make dinner') {
//     string += ' : Complete'
//   } else {
//     string += ' : Imcomplete'
//   }

//   console.log(string)