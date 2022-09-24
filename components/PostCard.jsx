import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
function PostCard({post}){
    return (
        <div className='post_parent_div'>
            <div className='post_sub_parent_div'>
                <img 
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="img_div"
                />
            </div> 
                <h1 className='post_text'>
                    <Link href={`/post/${post.slug}`}>
                        {post.title}
                    </Link>
                </h1>
            <div className='author_image_div'>
                <div className='post_author'>
                    <img 
                        alt={post.author.name}
                        src={post.author.photo.url}
                        className='author_image'
                    />
                    <p className='paragraph_author'>
                        {post.author.name}
                    </p>
                </div> 
                <div className='calender_div'>
                    <i className="uil uil-calendar-alt calender"></i>
                    <span className="moment">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                </div>
            </div> 
            <p className='excerpt_paragraph'>{post.excerpt}</p>
            <div className='button_div'>
                <Link href={`/post/${post.slug}`}>
                    <span className='button_span'>
                        Continue Reading
                    </span>
                </Link>
                
            </div>  
        </div>

    )
}

export default PostCard