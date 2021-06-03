const todoItem = document.querySelector("todo-item");

const todo = store.getState().todo;

export function showTodoItem() {
  const item = todo ? createTodoItem(todo) : null;
  todoItem.appendChild(item);
}

function createTodoItem(todo) {
  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  h3.appendChild(document.createTextNode(todo.todo));

  const ul = document.createElement("ul");
  const todoName = document.createElement("li");
  todoName.appendChild(document.createTextNode(todo.todo));

  const completedStatus = document.createElement("li");
  completedStatus.appendChild(
    document.createTextNode(todo.completed ? "Oui" : "Non")
  );

  ul.append(todoNam, completedStatus);
  article.append(h3, ul);
  return article;
}

// store.subscribe(() => {
//   console.log("yoo");
//   showTodoItem();
// });
