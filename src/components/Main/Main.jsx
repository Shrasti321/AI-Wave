import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>AI-Wave</p>
        <img src={assets.user_icon3} alt="" />
      </div>
      <div className="main-container">

        {!showResult
        ?<>
            <div className="greet">
            <p><span>Hello,</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Briefly summarize the concept urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activites for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        </>
        :<div className='result'>
            <div className="result-title">
                <img src={assets.user_icon3} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.ai_icon0} alt="" />
              {loading
              ?<div className='loader'>
                  <hr />
                  <hr />
                  <hr />
              </div>
              :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
              
            </div>
        </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">AI-Wave may display inaccurate info, so double check its responses. Your privacy and AI-Wave Apps.</p>
        </div>
      </div>
    </div>
  )
}

export default Main