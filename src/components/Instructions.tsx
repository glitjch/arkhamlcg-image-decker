import React from 'react'

// interface Props {
//   onClick: ()=> void
// }

const Instructions = (props: any) => {

  return (
    <aside 
      className='Instructions__container'>
      <h4>
        Less Writing, More Campaigning!
      </h4>
      <p>Print out your proxies here:</p>
      <ol>
        <li>Click Begin Ritual</li>
        <li>Enter your Arkham LCG Deck ID</li>
        <li>Click Generate</li>
        <li>Print Cards</li>
      </ol>
    </aside>
  )
}

export default Instructions