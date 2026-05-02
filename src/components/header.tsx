import type { Dispatch, SetStateAction } from "react";
import { SearchInput } from "./searchInput";
type HeaderProps = {
  searchKey: string;
  setSearchKey: Dispatch<SetStateAction<string>>;
  onSearch: (key: string) => void;
  showSearch: boolean
}

export function Header({searchKey, setSearchKey, onSearch, showSearch}: HeaderProps) {
  return <header className="z-10 flex items-center justify-between">
    <div className="m-2 flex">
      <img alt="Pixible" src="https://cdn.pixabay.com/user/2021/10/08/03-21-11-186_96x96.png" height={40} width={50}/>
      <h2 className="font-caesar text-5xl ml-2">Pixible</h2>
    </div>
    
    {showSearch && <div className="">
      <SearchInput className="min-w-[30vw] focus:min-w-[50vw]" searchKey={searchKey} setSearchKey={setSearchKey} onSearch={onSearch}/>
    </div>}
  </header>
}

