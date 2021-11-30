interface ITodo {
    _id: string
    name: string
    description: string
    status: boolean
    createdAt?: string
    deletedAt?: string
}

interface TodoProps {
    todo: Itodo
}

type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo: Itodo
}