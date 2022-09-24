import Image from 'next/image'
function Author({author}){
    return (
        <div className='author_div_content'>
            <div className='author_div_content_sub'>
                <Image 
                    alt={author.name}
                    unoptimized
                    width='90px'
                    height='90px'
                    src={author.photo.url}
                    className='author_image_content'
                />
                </div>
                <h3 className="heading_author_content">{author.name}</h3>
                <p className="heading_author_paragraph">{author.bio}</p>
            
        </div>
    )
}
export default Author