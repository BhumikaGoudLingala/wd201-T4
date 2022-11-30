const todoList=() =>{
    let all =[];
    const add=(todoList)=>{
        all.push(todoList);
    };
    const markAsComplete=(index)=>{
        all[index].completed=true;
    };

    const overdue=()=>{
        return all.filter((item)=> item.duedate < new Date().toLocaleDateString("en-CA"));
    };

    const dueToday=()=>{
        return all.filter((item)=> item.duedate===new Date().toLocaleDateString("en-CA"));
    };

    const dueLater=()=>{
        return all.filter((item) => item.duedate > new Date(),toLocaleDateString("en-CA"));
    };
    return{
        all, add, markAsComplete, overdue, dueToday, dueLater
    };
};

module.exports=todoList;
