const axios = require("axios");
const TodosMutations = require("./TodosMutations");

// Axios .get Methode soll die weitere Funktion mockResolvedValue erhalten
jest.mock("axios");

const returnedTodo1 = {
  id: 6,
  userId: 1,
  task: "Trinken",
  isDone: true,
  dueDate: "2024-11-10T00:00:00.000Z",
  createdAt: "2024-02-28T08:17:33.000Z",
  updatedAt: "2024-02-28T13:10:19.000Z",
};

describe("Testing POST Functions of Todo Route", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Teste POST Create Funktion", async () => {
    const mockData = {
      data: { todo: returnedTodo1 },
    };
    axios.post.mockResolvedValue(mockData);
    const myDate = new Date();
    const result = await TodosMutations.createTodo(1, "Essen", false, myDate);

    expect(result).toEqual(mockData.data.todo);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/create",
      { newDueDate: myDate, newIsDone: false, newTask: "Essen", newUserId: 1 }
    );
  });

  test("Teste PUT markTodo Funktion", async () => {
    const todoId = 6;
    const mockData = {
      data: { updatedTodo: todoId },
    };
    axios.put.mockResolvedValue(mockData);

    const result = await TodosMutations.markTodo(todoId, true);

    expect(result).toEqual(mockData.data.updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/mark",
      { todoId: todoId, newIsDone: true }
    );
  });

  test("Teste PUT update Funktion", async () => {
    const todoId = 6;
    const updatedTask = "Examen machen";
    const mockData = {
      data: { todo: returnedTodo1 },
    };
    axios.put.mockResolvedValue(mockData);

    const result = await TodosMutations.markTodo(todoId, updatedTask);

    expect(result).toEqual(mockData.data.todo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/${todoId}/update",
      { updatedTask }
    );
  });

  test("Teste POST deleteTodo Funktion", async () => {
    const todoId = 6;
    const mockData = {
      data: { sucess: true },
    };
    axios.post.mockResolvedValue(mockData);

    const result = await TodosMutations.deleteTodo(todoId);

    expect(result).toEqual(mockData.data.todo);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/delete",
      {}
    );
  });
});
