import React, { useEffect, useState } from 'react'
import "./assign.css";
import wixdata from './wixdata.js'
import pc from './analysis.jpg'


function Mid() {

  const[pcdta,setpcdata]= useState([])

  useEffect(()=>{
    // console.log(pcdata);
    setpcdata(wixdata)
  },[])

  // let filtered = pcdta.filter((val)=>{
  //   return val.rate >= 9.5
  // })
  // console.log(filtered);

  return (
    <div className='mid'>

      <div className='midchild'>
        {
          pcdta.map((val,index,array)=>{
            return(
              <div className='container' key={index}>
                <div className='image'>
                  <img src={pc} alt="" />
                  <p>{val.id}</p>
                </div>
                <div className='center'>
                  <div><span>{val.title}</span> - {val.para}</div>
                  {/* <p>{val.choice}</p> */}
                  {
                    index < 2 && <p>{val.choice}</p>
                    // display this for only 2, from startting
                  }
                  <h2>main heighlights</h2>
                  <div>
                    {
                      index === pcdta.length -1 ? null
                      :
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam aut odit sapiente nulla mollitia! Accusamus.</p>
                    }
                  </div>
                  <div>
                    <a href="">show more ∨</a>
                    {
                      // display only for last data
                      index === array.length -1 && <div className='centerlast'>
                        <div className='first'>
                          <p><span>9.9</span>Building responsive</p>
                          <p><span>8.9</span>cool</p>
                          <p><span>8.9</span>docs</p>
                        </div>
                        <div className='second'>
                          <h5>why we love it</h5>
                          <p><span>☑</span>Building responsive</p>
                          <p><span>☑</span>cool</p>
                          <p><span>☑</span>docs</p>
                        </div>
                      </div>
                    }
                  </div>
                </div>
                <div className='last'>
                  <div>
                    <h1>{val.rate}</h1>
                    <h1>{val.ratinfo}</h1>
                    <div className="icon">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                  </div>
                  <button>info</button>
                </div>
              </div>
            )
          })
        }
      </div>

      {/* <div>
        {
          pcdta.map((val)=>{
            return(
              <div className='container'>
                <div className='image'>
                  <img src={pc} alt="" />
                  <span>{val.id}</span>
                </div>
                <div className='center'>
                  <div><span>{val.title}</span> - {val.para}</div>
                  <p>{val.choice == null ? val.rate > 5 : null}</p>
                  <h2>main heighlights</h2>
                  <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi veniam aut odit sapiente nulla mollitia! Accusamus.</p>
                  </div>
                </div>
                <div className='last'>
                  <h1>{val.rate}</h1>
                  <h1>{val.ratinfo}</h1>
                  <button>info</button>
                </div>
              </div>
            )
          })
        }
      </div> */}


    </div>
  )
}

export default Mid