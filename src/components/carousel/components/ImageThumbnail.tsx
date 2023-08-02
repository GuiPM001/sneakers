interface ThumbnailImageProps {
  image: string;
  imageIndex: number;
  index: number;
  setImage: (index: number) => void;
}

export default function ImageThumbnail(props: ThumbnailImageProps) {
  const { image, imageIndex, index, setImage } = props;

  const isActive = imageIndex === index;

  return (
    <div 
      onClick={() => setImage(index)} 
      data-active={isActive} 
      className='w-20 cursor-pointer rounded-xl data-[active=true]:border-2 data-[active=true]:border-orange-400'
    >
      <img 
        src={image} 
        data-active={isActive} 
        className="rounded-md hover:opacity-40 transition duration-150 ease-in-out data-[active=true]:opacity-30" 
      />
    </div>
  )
}