import Social2 from "../../common/social/Social2";
import blogsData from "../../../data/blogs";
import Link from "next/link";

const DetailsContent = ({blog}) => {
  console.log(blog);
  return (
    <>
      <h3 className="text-20 fw-500">{blog?.title}</h3>
      <div className="text-15 mt-20">
      {blog?.details}
      </div>

      <ul className="list-disc text-15 mt-30">
      {blog.list && blog?.list.map((item) => (
        <><h3 className="text-20 fw-500">{item?.title}</h3>
     {
      item?.items.map((itm,i) => (
        
        <li key={i}>{itm}</li>
        
      ))
     }
</>
        
      ))}
        
      </ul>






      <div className="text-15 mt-20">
      {blog.finalDesc}
      </div>

    
    </>
  );
};

export default DetailsContent;
