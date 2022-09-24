import React, {useState,useEffect} from "react"
import Link from 'next/link'
import {getCategories} from '../services'


function Header(){
    const [categories, setCategories]=useState([])
    useEffect(()=>{
        getCategories().then((newCategories)=>setCategories(newCategories))
    },[]);
    const[Toggle,showMenu]=useState(false)
    function Toggler() {
        showMenu(!Toggle)
    }
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
    return (
        <div className='container header_parent'>
            <div className='header_div'>
                <div className='header_sub_div'>
                    <Link href="/">
                         <span>BlogCMS</span>
                    </Link>
                </div>
                <div className={Toggle? "header_sub_map_div show-menu" :"header_sub_map_div"}>
                    {categories.map((category)=>(
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <div className=" header_span ">
                                {category.name}
                            </div>
                        </Link>
                    ))}
                    <i className="uil uil-times nav_close " onClick={Toggler}></i>
                </div>
            
                
                <div className="nav_toggle" onClick={Toggler}> <i className="uil uil-apps"></i></div>
            </div>
            
            

        </div>

    )
}

export default Header