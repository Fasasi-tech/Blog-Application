import React,{useState,useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import {getRecentPosts,getSimilarPosts} from '../services'
function PostWidget({categories,slug}){
    const [relatedPosts,setRelatedPosts]=useState([]);

    useEffect(() =>{
        if (slug){
            getSimilarPosts(categories,slug).then((result)=>setRelatedPosts(result))
        }else{
            getRecentPosts().then((result)=>setRelatedPosts(result))
        }
    },[slug])
    return (
        <div className='postwidget_div'>
            <h3 className='postwidget_heading'>
                {slug?'Related Posts':'Recent posts'}
            </h3>
            {relatedPosts.map((post)=>(
                <div key={post.title} className='widget_div'>
                    <div>
                        <img
                            src={post.featuredImage.url}
                            alt={post.title}
                            className='postwidget_img'
                        />
                    </div>
                    <div className='widget_sub_div'>
                        <p className='widget_paragraph'>
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </p>
                        <Link href={`/post/${post.slug}`} key={post.title} className='widget_link'>
                            {post.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default PostWidget