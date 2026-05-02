export function SearchInput({searchKey, setSearchKey, className, onSearch}) {

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onSearch(searchKey);
    }
  }

  const handleIconClick = () => {
    onSearch(searchKey);
  }

  return <div className={`flex items-center bg-gray-500 opacity-50 h-[4vh] rounded-3xl p-3 ${className}`}>
    <input 
      onInput={(e: any) => {setSearchKey(e.target.value)}} 
      onKeyDown={handleKeyPress}
      className="w-full bg-transparent text-white placeholder-gray-300 focus:outline-none" 
      placeholder="Nature"
      value={searchKey}
    />
    <i className="fa-solid fa-magnifying-glass text-white ml-2 cursor-pointer flex-shrink-0" onClick={handleIconClick}></i>
  </div>
}