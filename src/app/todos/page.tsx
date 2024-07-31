import React from "react";
// import createTodoAction from "../actions/createTodoAction";
// import CreateTodoForm from "./createTodo";

export default function TodosPage() {
  return (
    <div>
      <CreateTodoForm />
    </div>
  );
}

async function createTodoAction(formData: FormData) {
  "use server";
  console.log("Server action");
  return <div>createTodoAction</div>;
}

function CreateTodoForm() {
  return (
    <div>
      <form action={createTodoAction} className="form mb-4">
        <div className="form-row">
          <label htmlFor="query">Query</label>
          <input type="search" name="query" id="query" />

          <button className="btn">Filter</button>
        </div>
      </form>
    </div>
  );
}
