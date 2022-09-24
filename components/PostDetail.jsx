import React from 'react';
import moment from 'moment';
import Link from 'next/link';

function PostDetail({post}){
    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
        }
    
        switch (type) {
          case 'heading-three':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
          default:
            return modifiedText;
        }
      };
   
    return (
        <div className='post_parent_div'>
            <div className='post_sub_parent_div'>
                <img 
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="img_div"
                />

                
            </div>
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
            <h1 className='post_text'>{post.title}</h1>
            {post.content.raw.children.map((typeObj,index)=>{
                const children=typeObj.children.map((item,itemIndex)=>getContentFragment(itemIndex,item.text,item))
                return getContentFragment(index,children,typeObj,typeObj.type)
            })}
        </div>
    )
}
export default PostDetail