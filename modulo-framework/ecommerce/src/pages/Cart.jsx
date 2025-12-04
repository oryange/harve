import { useContext } from "react";
import { ContextCart } from "../hooks/ContextCart";
import { Container, Table, Button } from "react-bootstrap";

export default function Cart() {
    const { cartProductList, removeProduct } = useContext(ContextCart);

    return (
        <Container className="py-4">
            <h2 className="display-5 fw-bold mb-4">Carrinho de Compras</h2>

            {cartProductList.length === 0 ? (
                <p className="text-muted">Seu carrinho está vazio.</p>
            ) : (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartProductList.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>R$ {product.price}</td>
                                <td>
                                    <Button 
                                        variant="danger" 
                                        size="sm"
                                        onClick={() => removeProduct(product.id)}
                                    >
                                        Remover
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
}
