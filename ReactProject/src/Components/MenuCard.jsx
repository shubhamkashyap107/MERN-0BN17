import veg from "../../public/veg.svg"
import nonVeg from "../../public/non-veg.svg"
import ratingStar from "../../public/ratingstar.svg"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import toast from "react-hot-toast"
import { addToCart } from "../Utils/CartSlice"



const MenuCard = ({name, defaultPrice, price, ratings, imageId, description, itemAttribute, cdn, resId, itemId}) => {
    const[isError, setIsError] = useState(false)
    const existingResId = useSelector(store => store.cart.id)
    // console.log(typeof existingResId)
    const dispatch = useDispatch()
    // console.log(itemId)

  return (
    <article className='flex mb-5'>
        <div className=' w-[70%]'>
            <img src={itemAttribute.vegClassifier == "VEG" ? veg : nonVeg} alt="" />
            <h2 className='font-bold'>{name}</h2>
            <p>₹{Math.floor((defaultPrice || price )/ 100)}</p>
            <p className='flex gap-0.5 text-sm'><img src={ratingStar} alt="" /><span className='text-green-900'>{ratings.aggregatedRating.rating}</span> <span>({ratings.aggregatedRating.ratingCountV2})</span></p>
            <p>{description.length > 130 ? description.slice(0,130)+ "..." : description}</p>

        </div>
        <div className='relative w-[30%] flex justify-center'>
            <img onError={() => {
                setIsError(true)
            }} className='h-32 w-full rounded-2xl' src={isError ? "/public/def.jpeg" : cdn + imageId} alt="" />
            <button
              onClick={() => {
                console.log("OK")
                if(existingResId == "" || existingResId == resId)
                {
                    dispatch(addToCart({
                        id : resId,
                        foodItem : {
                            name, price, imageId, itemId
                        }
                    }))
                }
                else
                {
                    toast.error("Please add items from the same restaurant or empty the cart")
                }

              }}
            className='border-gray-200 border cursor-pointer text-green-500 w-30 h-8 rounded-lg absolute bottom-0 bg-white '>ADD</button>
        </div>
        </article>
  )
}

export default MenuCard