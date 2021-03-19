const { Router } = require ('express');
const ProductsInfo = require ('../../products.json');

const productsRoutes = Router();

productsRoutes.get("/", (req, res) => {
    return res.json(ProductsInfo);
});

productsRoutes.get("/:id", (req, res) => {
    const { id } = req.params;

    ProductsInfo.map((produto) => {
        if (produto.id === Number(id)) {
            return res.json(produto);
        }
    });

    return res.status(404).json({
        text: "Produto não Encontrado"
    });
});

module.exports = productsRoutes;