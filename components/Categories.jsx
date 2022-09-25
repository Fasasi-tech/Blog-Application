import React, {useState,useEffect} from "react"
import Link from "next/link"
import {getCategories} from '../services'
function Categories(){
    const [categories, setCategories]=useState([])
    useEffect(()=>{
        getCategories().then((newCategories)=>{setCategories(newCategories)})
    },[])
    return (
        <div className='categories_div'>
            <h3 className='categories_heading'>
                Categories
            </h3>
            {categories.map((category,index) => ( 
                    <div className="category_div">
                    <Link key={index} href={`/category/${category.slug}`} className="category_link">
                        <span className="category_span">
                            {category.name}
                        </span>
                    </Link>
                    </div>                   
                ))}
        </div>

    )
}

export default Categories