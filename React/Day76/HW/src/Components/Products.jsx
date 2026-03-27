import Loader from './Loader'
import Card from './Card'

const Products = ({products}) => {
    

  return (
    <div >
        {
            products.length == 0 ? 
            (
                <Loader />
            ) : (
                <div className='grid grid-cols-5  w-fit mx-auto gap-[50px]'>
                    {products.map((item) => <Card img={item.images[0]} price={item.price} name={item.title} key={item.id} />)}
                </div>
            )
        }
    </div>
  )
}

export default Products