import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../service/productService';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('danger');
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();


    async function handleSubmit(event) {
        event.preventDefault();

        // Caso de uso em post
        // const form = new FormData();
        // form.append('email', email);
        // form.append('password', password);

        // const option = {
        //     method: 'POST',
        //     body: form,
        //     mode: 'cors'
        // }

        try {
            const userData = await getUserData();
            const user = userData.find(u => u.email === email && u.password === password);

            //  Validação simples
            if (!email || !password) {
                setAlertType('danger');
                setAlertMessage('Por favor, preencha todos os campos.');
                setShowAlert(true);
                return;
            }

            if (user) {
                setAlertType('success');
                setAlertMessage('Login realizado com sucesso!');
                setShowAlert(true);
                setValidated(true);
                localStorage.setItem('token', user.token);
                navigate("/");
            }

        } catch (error) {
            setAlertType('danger');
            setAlertMessage('Email ou senha incorretos.');
            setShowAlert(true);
        }
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                    <Card>
                        <Card.Body>
                            <h3 className="text-center mb-4">Login</h3>

                            {showAlert && (
                                <Alert variant={alertType} className="mb-3">
                                    {alertMessage}
                                </Alert>
                            )}

                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Digite seu email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Digite sua senha"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <Button
                                    variant="primary"
                                    type="submit"
                                    className="w-100"
                                    >
                                    Entrar
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;