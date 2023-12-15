
import { getCategories } from "api/fectchFuntions";
export default async function page({params: {locale , search_type , value , v_id , cat_id}}) {
  var data = await getCategories({search_type , value , v_id , cat_id})
  // console.log(data)
  return (
    <div className='result_container'> 
     <div>Categories {search_type} {value}</div>
      {JSON.stringify(data)}
    </div>
  );
}
