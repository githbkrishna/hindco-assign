import React from 'react'
import pc from './analysis.jpg'
import "./assign.css";

function Three() {

    const threedata = [
        {
            off:"20% off",
            time:"limited time",
            headd:"webbuilder",
            para:"Lorem ipsum dolor sit amet conse",
            disprice:"$39.96",
            orgprice:"$49.96",
        },
        {
            off:"20% off",
            time:"limited time",
            headd:"webbuilder",
            para:"Lorem ipsum dolor sit amet conse",
            disprice:"$39.96",
            orgprice:"$49.96",
        },
        {
            off:"20% off",
            time:"limited time",
            headd:"webbuilder",
            para:"Lorem ipsum dolor sit amet conse",
            disprice:"$39.96",
            orgprice:"$49.96",
        },
    ]

  return (
    <div className='three'>
        <div className='infos'>
            {
                threedata.map((val,i)=>{
                    return(
                        <div className='info' key={i}>
                            <img src={pc} alt="" />
                            <div className='off'>
                                <span>{val.off} </span>
                                <span> {val.time}</span>
                            </div>
                            <h3>{val.headd}</h3>
                            <p>{val.para}</p>
                            <div className='priceoff'>
                                <span>{val.disprice}</span>
                                <span>{val.orgprice}</span>
                                <span>({val.off})</span>
                            </div>
                            <button>view deal</button>
                        </div>
                    )
                })
            }
        </div>
        <div className="inputmail">
            <h2>Sign upand get exclusive <br /> special deals</h2>
            <div className='inputm'>
                <div className="inpfath">
                    <input type="text"/>
                    <div className="inpchild">sign up</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Three