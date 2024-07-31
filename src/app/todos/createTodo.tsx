import React from "react";
import createTodoAction from "../actions/createTodoAction";

export default function CreateTodoForm() {
  return (
    <div>
      <form
        action={() => {
          console.log("server action");
        }}
        className="form mb-4"
      >
        <div className="form-row">
          <label htmlFor="query">Query</label>
          <input type="search" name="query" id="query" />

          <button className="btn">Filter</button>
        </div>
      </form>
    </div>
  );
}
