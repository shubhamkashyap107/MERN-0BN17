import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import RestaurantCard from './RestaurantCard'
import { addDataById } from '../Utils/CacheSlice'
const CDN = import.meta.env.VITE_IMG_CDN


const RestaurantsHavingFoodCategory = () => {

    const{id} = useParams()
    const[data, setData] = useState({})
    const[isIdIncorrect, setIsIdIncorrect] = useState(false)
    const{lat, lon} = useSelector(store => store.location.data)
    const dispatch = useDispatch()
    const cachedData = useSelector(store => store.cache[`${id}`])
    const navigate = useNavigate()

    useEffect(() => {


        if(cachedData)
        {
             let kaamKaData = cachedData.data.cards.slice(3).map((item) => {
                    return item.card.card.info
                })

                setData({
                    info : {
                        title : cachedData.data.cards[0].card.card.title,
                        desc : cachedData.data.cards[0].card.card.description
                    },
                    cards : kaamKaData
                })
        }
        else
        {



        if(lat)
        {
            fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lon}&collection=${id}&tags=layout_CCS_Rolls&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
            .then((res) => {
                return res.json()
            })
            .then((apiData) => {
                // console.log(apiData.statusCode)
                dispatch(addDataById({id, data : apiData}))

                if(apiData.statusCode == 1)
                {
                    setIsIdIncorrect(true)
                }
                let kaamKaData = apiData.data.cards.slice(3).map((item) => {
                    return item.card.card.info
                })

                setData({
                    info : {
                        title : apiData.data.cards[0].card.card.title,
                        desc : apiData.data.cards[0].card.card.description
                    },
                    cards : kaamKaData
                })
            })
        }
        
    
    }

    }, [id, lat, lon])

    if(isIdIncorrect)
    {
        return (
            <div>
                <Navbar />

                <main>
                    <h1>Something went wrong...</h1>
                    <button onClick={() => navigate("/restaurants")}>Go Back</button>
                </main>
            </div>
        )
    }

  return (
    <div>
        <Navbar />


        

        <main >
            {data.cards ? (
                <>
                    <div className=' w-fit mx-35 my-10'>
                        <h1 className='text-4xl font-extrabold'>{data.info.title}</h1>
                        <p className='text-lg'>{data.info.desc}</p>
                    </div>

                    <div className='grid grid-cols-4 w-fit mx-auto gap-4'>
                        {data.cards.map((item) => {
                            return <RestaurantCard cdn={CDN} data={item} />
                        })}
                    </div>
                </>
                
            ) : (
                <div className='h-[88vh] flex justify-center items-center'>
                    <Loader />

                </div>
            )
        }
        </main>


    </div>
  )
}

export default RestaurantsHavingFoodCategory