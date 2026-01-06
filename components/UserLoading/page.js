

export default function LoadingSkeleton({width="100%",hight="20px",className=""}) {
  return (
    <div className={`bg-gray-300 animate-pulse rounded-md ${className} `}
    style={{width,hight}}>
      
    </div>
  )
}
