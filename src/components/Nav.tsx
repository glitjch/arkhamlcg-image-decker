import { useState } from "react";
import Instructions from "./Instructions";


// COMPONENT
const Nav = () => {
  const [showInstrutions, setshowInstrutions] = useState(false)

// VIEW
  return (
    <nav className="Nav__container">
      <div>
        <h1>
          PROXY RITUAL
        </h1>
        <h2>for Arkham Horror LCG</h2>
      </div>
      <div>
        <p onClick={() =>setshowInstrutions(!showInstrutions)}>
          INSTRUCTIONS
        </p>
      </div>
          {showInstrutions && <Instructions />}
    </nav>
  )
}

export default Nav