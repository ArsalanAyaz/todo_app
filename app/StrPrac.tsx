'use client';


import React, { useState } from "react";

export default function StrPrac() {

  const [val, setVal] = useState('')
  const [val2, setVal2] = useState('')

       const onChangeHandler=(e:any)=>{
       
       console.log("e is :", e.target.value)
       setVal(e.target.value);

};
       const onChangeHandler2=(e:any)=>{
       
       console.log("e is :", e.target.value)
       setVal2(e.target.value);

};



  return (
    <div>
      <input type="text" value={val} onChange={onChangeHandler} />
      <br />
      <input type="text" value={val2} onChange={onChangeHandler2} />
<br />
      val length: {val.length}
      <br />
      val2 length: {val2.length};
    </div>
  );
}

