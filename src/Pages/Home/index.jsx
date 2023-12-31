import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card" 
import ProductDetail from "../../Components/ProductDetail"

function Home() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
        .then(response => response.json()
        .then(data => setItems(data))
        )

    }, [])
    return (
        <Layout>
            Home
            <div className="grid gap-4 grid-cols-3 px-20 w-full max-w-screen-lg ">
            {
                items?.map(item =>(
                    <Card data={item} key={item.id}/>
                ))
            }
            </div> 
            <ProductDetail/>
        </Layout>
    )
}

export default Home