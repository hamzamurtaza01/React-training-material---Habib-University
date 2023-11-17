import { useState } from "react"
import "./App.css"
import ProductCatalog from "./ProductCatalog"

function App() {
    const [productList, setProductList] = useState([])

    return (
        <div className="App">
            <ProductCatalog products={productList} />
        </div>
    )
}

export default App
