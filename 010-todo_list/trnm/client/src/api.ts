import axios, { AxiosResponse } from "axios";

const baseUrl: string = `${process.env.baseURL}:5000`;

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(baseUrl+"/todos");
    return todos;
  } catch (error) {
      throw new Error(error);
  }
}

export const addTodos = async (formData: ITodo): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: formData.status
    }
    const saveTodo: AxiosResponse<ApiDataType>> = await axios.post(baseUrl+"/todo", todo);
    return saveTodo;
  } catch (error) {
    throw new Error(error);
  }
}