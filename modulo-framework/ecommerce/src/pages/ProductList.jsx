
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../service/productService";

export default function ProductList() {
    const [products, setProducts] = useState([]);

    const showErrorMessage = (msg) => {
        toast.error(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
    }

    const loadProductList = async () => {
        try {
            const products = await getProducts();
            setProducts(products);
        } catch (error) {
            showErrorMessage("Erro ao buscar os produtos")
        }
    };

    useEffect(() => {
        // Chama a função quando o componente é montado
        loadProductList();
    }, []); // Array vazio significa que só executa uma vez

    return (
        <Container className="py-4">
            <Row className="mb-4">
                <Col className="text-center">
                    <h2 className="display-5 fw-bold">Nossos Produtos</h2>
                    <p className="text-muted">Confira nossa seleção especial</p>
                </Col>
            </Row>
            <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
                {products.map((product) => (
                    <Col key={product.id} className="d-flex">
                        <ProductCard
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                            image={product.image}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
