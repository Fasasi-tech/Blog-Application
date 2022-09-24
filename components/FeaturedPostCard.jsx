import React from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedPostCard = ({ post }) => (
  <div className="featuredPostCard_div">
    <div className="featuredPostCard_sub_div" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <div className="featuredPostCard_self_div" />
    <div className="featuredPostCard_self_div_third">
      <p className="createdAt_div">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
      <p className="featuredPostCard_title_div">{post.title}</p>
      <div className="featuredPostCard_image">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          className="image_postCard"
          src={post.author.photo.url}
        />
        <p className="featuredPost_paragraph">{post.author.name}</p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}><span className="last_link" /></Link>
  </div>
);

export default FeaturedPostCard;
