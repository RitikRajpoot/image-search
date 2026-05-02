import { SearchInput } from "./searchInput";
import { Tags } from "./tags";

type SearchBarProps = {
  searchKey: string;
  setSearchKey: () => void;
  className: string
  onSearch: ()=> void;
}
export function SearchBar(props: SearchBarProps) {


  return <div className={`${props.className} flex flex-col justify-between w-full`}>
    <h3 className="py-16 text-white text-[2rem]">Stunning royalty-free images & royalty-free stock</h3>
    <SearchInput searchKey={props.searchKey} setSearchKey={props.setSearchKey} className={""} onSearch={props.onSearch}/>
    <Tags tagList={["Roads", "Nature", "Abstract", "Ancient", "Civilization", "Beauty"]} setSearchKey={props.setSearchKey}/>
  </div>
}