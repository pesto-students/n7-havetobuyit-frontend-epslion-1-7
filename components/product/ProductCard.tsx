import { Carousel } from 'antd';

export interface Reaction {
    reaction: string;
    count: number;
}

interface ProductCardProps {
    children: any;
    title: string;
    images: string[];
    reactions: Reaction[];
    description: string;
    rating: number;
    postedBy: {
        firstName: string;
    }
}

export const ProductCard: React.FC<ProductCardProps> = ({children, images, rating, reactions, title, description, postedBy}) => {    
    return <div className=" rounded overflow-hidden border w-full  bg-white mx-3 md:mx-0 lg:mx-0">
    <div className="w-full flex justify-between p-3">
      <div className="flex">
        <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
          <img src="https://avatars0.githubusercontent.com/u/38799309?v=4" alt="profilepic"/>
        </div>
        <span className="pt-1 ml-2 font-bold text-sm">{postedBy.firstName}</span>
      </div>
      <span className="px-2 hover:bg-gray-300 cursor-pointer rounded"><i className="fas fa-ellipsis-h pt-2 text-lg"></i></span>
    </div>
    <div className='w-full'>
        <Carousel>{images.map(src => <img key={src} src={src} />)}</Carousel>
    </div>
    <div className="px-3 pb-2">
      <div className="pt-2">
        <i className="far fa-heart cursor-pointer"></i>
        <span className="text-sm text-gray-400 font-medium">12 likes</span>
      </div>
      <div className="pt-1">
        <div className="mb-2 text-sm">
          <span className="font-medium mr-2">{postedBy.firstName}</span>{description}
        </div>
      </div>
    </div>
  </div>
}