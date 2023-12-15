
import { getSeachResult } from "../../../api/fectchFuntions/index";
import Result from "../components/result/piece/result";
export default async function SearchReasult({params: {locale , search_type , value , v_id , cat_id}}) {
  var data = await getSeachResult({search_type , value , v_id , cat_id})
  return (
    <div className='result_container'> 
     <div>search result {search_type} {value}</div>
      <Result result={data} />
    </div>
  );
}
