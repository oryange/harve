import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ContextCart } from "../hooks/ContextCart";

export default function ProductCard({ id, name, price, description, image }) {
    const { addToCart } = useContext(ContextCart);

    function handleAddToCart() {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        const product = {
            id,
            name,
            price,
            description,
            image
        };

        addToCart(product);
    }
    const navigate = useNavigate();

    return (
        <Card className="h-100 d-flex flex-column">
            <div style={{ height: '200px', overflow: 'hidden' }}>
                <Card.Img
                    variant="top"
                    src={image}
                    alt={name}
                    className="w-100 h-100 object-fit-cover"
                />
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline">
                    <span className="text-truncate" title={name}>{name}</span>
                    <span className="ms-2 text-nowrap">R$ {price}</span>
                </Card.Title>
                <Card.Text className="flex-grow-1">
                    {description.length > 100 ? `${description.substring(0, 100)}...` : description}
                </Card.Text>
                <Button
                    variant="primary"
                    className="mt-auto"
                    onClick={handleAddToCart}
                >
                    Adicionar ao Carrinho
                </Button>
            </Card.Body>
        </Card>
    );
}