import React from 'react'
import './collection-item.styles.scss'

const CollectionItem = ({name, price, id, imageUrl}) => (
    <div className="collection-item">
        <div 
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className="collection-footer"></div>
            <span className="price">{price}</span>
    </div>
)