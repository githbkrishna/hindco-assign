import React, { useEffect, useState } from 'react'
import "./assign.css";

export const Breadcrumbs = () => {

    const[bread,setbread] = useState([])

    useEffect(()=>{

      const breadcrumbdata = [
        {label:"home", path:"/"},
        {label:"Hosting", path:"/Hosting"},
        {label:"Hosting5", path:"/hosting5"},
        {label:"Hosting6", path:"/hosting6"},
      ]  

      setbread(breadcrumbdata)

    },[])

  return (
    <div className='breadcrumbs'>
      <ol className='breadcrumb'>
        {
          bread.map((breadcrumb,index)=>{
            return(
              <li key={index} className='breadcrumb-item'>
                {
                  index === bread.length ? (
                    <span>
                      {breadcrumb.label}
                    </span>
                  ):(
                    <a href={breadcrumb.path}>
                      {breadcrumb.label}
                    </a>
                  )
                }
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

export default Breadcrumbs