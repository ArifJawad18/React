
export default function Post({post}){


const {title,body, id,userId} = post;
return(
     <div className="post">
          <h5>Title:{title}</h5>
          <p>userId:{userId}</p>
          <p>postId{id}</p>
          <p>{body}</p>
     
     </div>
)
}