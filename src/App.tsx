import {  useCallback, useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { getRequest } from './utils/request';
import { Pexels } from './components/pexels';

function App() {

  const [searchKey, setSearchKey] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = useCallback(async () => {
    if(!searchKey || searchKey.length <= 0) return;
    setLoading(true);
    const payload: Record<string, string> = {"query": searchKey, "size": "small"}
    const res = await getRequest('https://api.pexels.com/v1/search?', payload);
    console.log(res.photos);
    setLoading(false);
    setImages(res.photos);
  }, [searchKey])


  return (
   <>
    <Header setSearchKey={setSearchKey} searchKey={searchKey} showSearch={images.length > 0} onSearch={fetchImages}/>
    {images.length > 0 || loading? <Pexels images={images} /> :<Hero setSearchKey={setSearchKey} searchKey={searchKey} onSearch={fetchImages}/>}
   </>
  )
}

export default App
