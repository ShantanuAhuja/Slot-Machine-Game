import React from 'react'
import Slot from './Slot'
import './index.css'
const App = () => {
  return <>

    <h1 className=" heading_style"> π° <span>Slot  Machine  Game</span> π°</h1>
    <div className="machine">
      <Slot x="π " y="π " z="π " />
      <hr />
      <Slot x="πΈπ§ " y="π " z="π " />
      <hr />
      <Slot x="πΈπ§ " y="πΈπ§ " z="πΈπ§ " />
      <hr />
    </div>




  </>
}
export default App;
