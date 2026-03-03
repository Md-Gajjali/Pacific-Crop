import React, { useEffect, useState } from 'react'
import Flex from '../componets/Flex'
import axios from "axios";
import ProductCard from '../componets/ProductCard';

const Product = () => {
    const [product, setProduct] = useState([])
    const [category,setCategory] = useState([])

    async function getAlldata() {
        await axios.get('https://dummyjson.com/carts')
            .then( (res)=> {
                setProduct(res.data.carts[4].products);
            })
    }

    console.log(product);
    
    useEffect (()=>{
        getAlldata()
    },[])

    // useEffect(()=>{
    //     const UniqueCategory = 
    // },[product])

    
    // async function getAllData() {
    //     await axios.get('https://dummyjson.com/products')
    //         .then((res) => {
    //             setProduct(res.data.products)
    //             // setLoading(true)
    //             // dispatch(GetProducts(res.data.products))
    //         })
    //     }
        

    //     console.log(product);
        

    // useEffect(() => {
    //     getAllData()
    // }, [])


    return (
        <div className='mt-20 '>
            <div className='container'>
                <Flex className='justify-between'>
                    <div className='w-[20%]'>
                        <ul className='leading-15 '>
                            {
                                product.map((item)=>{
                                    return(
                                        <li>{item.category}</li>

                                    )
                                })
                            }
                            <li>home</li>
                            <li>home</li>
                            <li>home</li>
                            <li>home</li>
                        </ul>
                    </div>
                    <div className='w-[80%] flex justify-between gap-4 flex-wrap'>
                        {
                            product.map((item)=>{
                                return(
                                    <ProductCard
                                    ImgSrc={item.thumbnail}
                                    title={item.title}
                                    DisParcentge={item.discountPercentage}
                                    discountPrice={item.price}
                                    price={Math.round(item.price - (item.price * item.discountPercentage)/100)}
                                    btn='add to card'
                                    />
                                )
                            })
                        }
                    </div>
                </Flex>
            </div>
        </div>
    )
}

export default Product
