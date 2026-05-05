import React from 'react'
import ratingsvg from "../../public/ratingSvg.svg"

const RestaurantCard = ({data, cdn, size}) => {
    const{areaName, avgRating, cloudinaryImageId, cuisines, name, sla} = data
    const {slaString} = sla

  return (
    <div className='shrink-0 w-fit'>
        <img className={'rounded-2xl ' + (size == "large" ? "h-50 w-70" : "h-40 w-60")} src={cdn + cloudinaryImageId} alt="" />

        <div>
            <h2 className={'font-bold ' + (size == "large" ? "text-lg" : "text-sm")}>{name.slice(0,18)}...</h2>
            <p className='flex gap-1'><img src={ratingsvg} alt="" /><span>{avgRating}</span> &bull; <span>{slaString}</span></p>
            <p className='text-gray-400 text-sm'>{cuisines.join(", ").length > 25 ? cuisines.join(", ").slice(0,25) + "..." : cuisines.join(",")}</p>
            <p className='text-gray-400 text-sm'>{areaName}</p>
        </div>
    </div>
  )
}

export default RestaurantCard