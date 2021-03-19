import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Lista, Item, Container, Buttons } from "./style"

import api from "../../services/api"

function Products() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts, cart] = useState([]);

    useEffect(() => {
        try {
            api.get("/products").then((response) => {
                const productData = response.data;
                console.log(productData)
                setProducts(productData)
                setLoading(false);
            })
        } catch (err) {

        }
    }, []);

    function addItem(id) {
        let arrayCart = [];
        products.map((prod) => {
            if (!(id === prod.id)) {
                arrayCart.push(prod);
                console.log(arrayCart)
            }
        });
    }


    function trueValor(precoPromocional) {
        products.map((prod) => {
            if (precoPromocional !== null) {

            } else {
                
            }
        })
    }

    return (
        <Container>
            {loading === true ? (
                <h1>Carregando</h1>
            ) : (
                products.map((prod) => (
                    <Lista>
                        <Item>
                            <li>ID</li>
                            <li>{prod.id}</li>
                        </Item>
                        <Item>
                            <li>NOME</li>
                            <li>{prod.name}</li>
                        </Item>
                        <Item>
                            <li>PRECO</li>
                            {trueValor()}
                            <li>{prod.preco}</li>
                        </Item>
                        <Item>
                            <li>PROMOÇÃO</li>
                            <li>{prod.precoPromocional}</li>
                        </Item>

                        <Buttons>
                            <Link key={products.id} to={`/products/${prod.id}`}> Ver mais </Link>
                        </Buttons>                                                                                               
                    </Lista>
                ))
            )}
        </Container>
    )

}

export default Products