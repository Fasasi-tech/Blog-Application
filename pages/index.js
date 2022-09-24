import Head from 'next/head'
import Image from 'next/image'
import { FeaturedPosts } from '../sections';
import {Categories, PostCard, PostWidget} from '../components'
import {getPosts} from '../services'


export default function Home({posts}) {
  return (
    <div className="home_parent container">
          <Head>
            <title>CMS Blog</title>
            <link  rel='icon' href="/favicon.ico" />
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
          </Head>
          <FeaturedPosts />
          <div className='sub_parent' >
         
              <div className="sub_sub_parent">
                    {posts.map((post,index) => (
                      <PostCard post={post.node} key={post.title} />
                    ))} 
              </div>
              <div className="sticky_div">
                <div className="sub_sticky_div">
                <PostWidget />
                <Categories />
                  
                </div>
              </div>
          </div>    
    </div>
  )
}
/*fetching data*/
export async function getStaticProps(){
  const posts= (await getPosts()) || [];
  return {
    props: {posts}
  }
}