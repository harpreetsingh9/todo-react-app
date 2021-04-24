import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import "./Todo.css";

function Todo({todo}) {

  return (
    <div className="list">
      <List>
        <div className="list__add">
          <ListItem>
            <ListItemText primary={todo} secondary="" />
          </ListItem>
        </div>
      </List>
      
    </div>
  );
}
export default Todo;
