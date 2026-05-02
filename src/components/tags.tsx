export function Tags(props: {tagList: string[], setSearchKey: (item: string)=> void;}) {
  return <div className="m-3">
    {props.tagList.map((item) => {
      return <span onClick={() => props.setSearchKey(item)} className="bg-gray-500 rounded text-white mr-1 p-2 opacity-50 cursor-pointer text-xs">{item}</span>
    })}
    
  </div>
}