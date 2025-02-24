import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section>
        <BentoGrid>
            {gridItems.map(({id,title,className,img,spareImg,titleClassName,description,imgClassName})=>(
                <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                spareImg={spareImg}
                titleClassName={titleClassName}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid
