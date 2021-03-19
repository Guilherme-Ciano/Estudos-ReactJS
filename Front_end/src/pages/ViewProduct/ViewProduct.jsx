import {useEffect, useState} from "react";
import { useLocation } from "react-router";
import { Container, Input } from "./styles";
import { Lista, Item, Buttons } from "../Products/style"

import api from "../../services/api";

function ViewProduct() {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState({});

    const location = useLocation();
    const id = location.pathname.split("/")[2];

    useEffect(() => {
        try {
            api.get(`/products/${id}`).then((response) => {
                setProducts(response.data)
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

    
    return (
        <Container>
            {loading === true ? (
                <h1>Carregando</h1>
            ) : (
                <Lista>
                    <Item>
                        <li>ID</li>
                        <li>{products.id}</li>
                    </Item>
                    <Item>
                        <li>NOME</li>
                        <li>{products.name}</li>
                    </Item>
                    <Item>
                        <li>DESCRIÇÃO</li>
                        <li>{products.descricao}</li>
                    </Item>
                    <Item>
                        <li>PRECO</li>
                        <li>{products.preco}</li>
                    </Item>
                    <Item>
                        <li>PROMOÇÃO</li>
                        <li>{products.precoPromocional}</li>
                    </Item>
                    <Buttons>
                        <a onClick={() => addItem(products.id)}>Comprar Produto</a>
                    </Buttons>
                </Lista>
            )}
        </Container>
    )
}

export default ViewProduct