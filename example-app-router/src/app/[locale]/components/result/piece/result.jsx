
export default function Result({result}) {
  return (
    <div>
      {result?.map(function(el, i){
            return <div key={Math.random()*100}>{el.name}</div>;
        })}
    </div>
  )
}
