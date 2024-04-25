import Image from 'next/image'

import React from 'react'
interface Props {
    _id: string,
    name: string,
    image: string,
    services: string[]
}
const CitiesFilter = ({ _id, name, image, services } : Props) => {

  return (
    <div>
        <h1>Trending destinations</h1>
        <p>Most popular choices for travellers from Morocco</p>
        <div>
            
            <Image 
                src={image}
                alt='location'
                width={400}
                height={400}
            />
            <h3>{name}</h3>
            
        </div>
    </div>
  )
}

export default CitiesFilter