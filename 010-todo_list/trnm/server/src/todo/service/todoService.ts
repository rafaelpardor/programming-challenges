import Todo from "../repository/models/todo"

export const getTodosService = async (id: String): Promise<void> => {
  try {
  } catch {
    res.status(500).json({ message: "ID not found" });
  }
}

export const getTodoByIdService = async (id: String): Promise<void> => {
  try {
    const getTodo: ITodo | null = await Todo.findById({ _id: id });
  } catch (error) {
    
  }
}