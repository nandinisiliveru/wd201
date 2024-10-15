const todoList = () => {
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
      // Write the date check condition here and return the array
      // of overdue items accordingly.
      const today = new Date().toISOString().split("T")[0]
      const overDueItems= all.filter((item)=>item.dueDate<today)
      return overDueItems

    }
  
    const dueToday = () => {
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
      const dueTodayItems = all.filter((item)=>item.dueDate === today)
      return dueTodayItems

    }
  
    const dueLater = () => {
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
      const dueLaterItems = all.filter((item)=>item.dueDate>today)
      return dueLaterItems
    }
  
    const toDisplayableList = (list) => {
      // Format the To-Do list here, and return the output string
      // as per the format given above.
      const formattedTodos= list.map((todo)=>{
        let isCompleted=' '
        if(todo.completed){
            isCompleted='x'
        }
        if(todo.dueDate===today){
            return `[${isCompleted}] ${todo.title}`
        }
        else{
            return `[${isCompleted}] ${todo.title} ${todo.dueDate}`
        }


      })
      let stringFormat = formattedTodos.join("\n")
      return stringFormat


    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };
  module.exports = todoList;