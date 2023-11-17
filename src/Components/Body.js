import React, { useState } from 'react'

import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])
    const [index, setIndex] = useState(0)  // 1
    function change() {  //0+1%3
        const newIndex = (index + 1) % fruits.length
        setIndex(newIndex)
    }
     return (
        <div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <img src='https://static.toiimg.com/photo/103756516.cms' height={200} width={200} alt="" />
                <p> Ganesha is known as the remover of obstacles and the offspring of Shiva,<br></br> the Hindu god of destruction and his consort the goddess Parvathi.<br></br> Several myths detail his birth and acquisition of the elephant head.<br></br> These myths vary by region, tradition, and sect.<br></br>Each deity either represents or is in charge of some aspect of life.<br></br> Ganesha is prominently known as the remover of obstacles.<br></br> Because of this, many Hindus worship him before any major endeavor<br></br> they undertake – be it business, marriage, childbirth, etc.</p>
                <p>likes: {likes}</p>
                {/* destructuring */}
                <button onClick={count}>Like</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>onutput : {text}</p>
                <button onClick={reset}>Reset</button>
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://youtu.be/RLzC55ai0eo?si=6e0ogSwdX4nakKqL'} height={200} controls />
                <div>
                <p>i like this {fruits[index].fruit}</p>
            <button onClick={change}>Change me</button>
        </div>
                </div>
            </div>
    
    )
}
export default Body