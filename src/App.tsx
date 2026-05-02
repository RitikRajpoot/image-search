import {  useCallback, useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { getRequest } from './utils/request';
import { Pexels } from './components/pexels';

function App() {

  const [searchKey, setSearchKey] = useState("");
  const [images, setImages] = useState([]);

  const fetchImages = useCallback(async () => {
    if(!searchKey || searchKey.length <= 0) return;
    const payload: Record<string, string> = {"query": searchKey, "size": "small"}
    const res = await getRequest('https://api.pexels.com/v1/search?', payload);
    // const result = await res.json();
    console.log(res.photos);
    setImages(res.photos);
  }, [searchKey])


  return (
   <>
    <Header setSearchKey={setSearchKey} searchKey={searchKey} showSearch={images.length > 0} onSearch={fetchImages}/>
    {images.length > 0? <Pexels images={images} /> :<Hero setSearchKey={setSearchKey} searchKey={searchKey} fetchImages={fetchImages} onSearch={fetchImages}/>}
   </>
  )
}

export default App
