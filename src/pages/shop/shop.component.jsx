import React from 'react'
import SHOP_DATA from './shop.data.jsx'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.setState = {
            collections: SHOP_DATA
        }
    }

    render() {
        return(
            <div>SHOP PAGE</div>
        )
    }
}

export default ShopPage