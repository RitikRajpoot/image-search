import type { Dispatch, SetStateAction } from "react";
import { SearchBar } from "./searchBar";

type HeroProps = {
  searchKey: string;
  setSearchKey: Dispatch<SetStateAction<string>>;
  onSearch: ()=> void;
}
export function Hero(props:HeroProps) {

  return <main className="m-8 h-[50vh] overflow-hidden rounded-3xl relative mobile:block hidden">
    <img className="w-full h-full object-cover object-center" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt="hero image" />
    <SearchBar className="absolute left-1/2 top-1/2 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2 " searchKey={props.searchKey} setSearchKey={props.setSearchKey}  onSearch={props.onSearch}/>
  </main>
}