import React from "react";
import StrPrac from "./StrPrac";
import CounterApp from "./counter_app";
import CounterAppAdvanced from "./counterAppAdvanced";
import TodoApp from "./Todo1";

export default function Page() {
  return (
    <div>
       <TodoApp /> 

        <h1>String and useState Practice</h1>
      <StrPrac />
      <br />
      <h1>CounterApp</h1>
      <CounterApp />
      <br />
      <h1>AdvancedCounterApp</h1>
      <CounterAppAdvanced/>
      <br /> 
    </div>
  );
}
