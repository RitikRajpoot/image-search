import { Skeleton } from "./skeleton";

type Image = {
  alt: string;
  avg_color: string;
  height: number;
  id: number
  liked: boolean
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  url: string;
  width: number;
}

export function Pexels({images}: {images: Image[]}) {
  return <section className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-4 p-4">
    {
      (images && images.length > 0) ?  images.map((image: Image) => {
        return <div key={image.id} className="p-2">
          <img src={image.url} alt={image.alt} className="w-full h-auto rounded-lg object-cover" />
        </div>
      }) : 
      <Skeleton />
    }
  </section>
}