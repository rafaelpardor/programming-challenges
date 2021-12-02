import { Response, Request } from "express"
import { ITodo } from "../repository/types/todo"
import Todo from "../repository/models/todo"

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const getTodos: ITodo[] = await Todo.find();
    res.status(200).json({ getTodos });
  } catch (error) {
    throw error;
  }
}

export const getTodoById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { params: { id }} = req;
    if (!id) {
      res.status(400).json({ message: "Todo ID not provided" });
    }
    try {
      const getTodo: ITodo | null = await Todo.findById({ _id: id });
      res.status(200).json({ getTodo });
    } catch {
      res.status(500).json({ message: "ID not found" });
    }
  } catch (error) {
    throw error;
  }
}

export const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<ITodo, "name" | "description" | "status">
    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status
    });

    const newTodo: ITodo = await todo.save();

    res.status(200).json({ message: "Todo added", todo: newTodo });
  } catch (error) {
    throw error;
  }
}

export const updateTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const updateTodo: ITodo | null = await Todo.findByIdAndUpdate(
      { _id: id },
      body
    );
    res.status(200).json({
      message: "Todo updated",
      todo: updateTodo
    });
  } catch (error) {
    throw error;
  }
}

export const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const deleteTodo: ITodo | null = await Todo.findByIdAndRemove(req.params.id);
    res.status(200).json({
      message: "Todo deleted",
      todo: deleteTodo
    });
  } catch (error) {
    throw error;
  }
}
