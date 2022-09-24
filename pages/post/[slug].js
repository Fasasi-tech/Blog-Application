import React from 'react';
import { useRouter } from 'next/router';



import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components';
import { getPosts, getPostDetails } from '../../services'
function PostDetails({post}){
    return (
     <div className='container home_parent'>
     <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
        <div className='sub_parent'>
            <div className="sub_sub_parent">
               <PostDetail post={post}/>
               <Author author={post.author} />
               <CommentsForm slug={post.slug} />
               <Comments slug={post.slug}/> 
            </div>
        
            <div className="sticky_div">
                <div className="sub_sticky_div">
                    <PostWidget slug={post.slug} categories={post.categories.map((category)=>category.slug)}/>
                    <Categories />
                </div>
            </div>
        </div>
    </div>
    )
}
export default PostDetails
export async function getStaticProps({params}){
    const data=await getPostDetails(params.slug)
    return {
      props: {post:data}
    }
  }
  
// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
  export async function getStaticPaths(){
    const posts=await getPosts()
    return {
      paths: posts.map(({node:{slug}})=>({params:{slug}})),
      fallback:true,
    }
  }