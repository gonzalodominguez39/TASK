import * as React from "react";
import { todoData } from "../data/todos";
import { FlatList} from "react-native";
import Todo from "./Todo";

export default function TodoList() {
  return (
    <FlatList
      data={todoData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Todo {...item}/>}

    />
  );
}
