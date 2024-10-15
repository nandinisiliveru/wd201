
const todoList = require('../todo');

const {all, markAsComplete, add } = todoList();

describe("todolist test suite", ()=>{
    beforeAll(() => {
        add(
            {
                title: "Test todo",
            completed: false,
            dueDate: new Date().toISOString()
            }
        );
    })
    test("should add new todo", () =>{
        const todoItemsCount = all.length;
        add(
            {
            title: "Test todo",
            completed: false,
            dueDate: new Date().toISOString()
            }
        );
        expect(all.length).toBe(todoItemsCount + 1);
    });
    test("should mark a todo as complete", () =>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
})