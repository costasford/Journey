import { Form, Button, Container, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import userService from '../../utils/userService';
import { isDemoMode } from '../../utils/apiWrapper';

export default function Login(props){

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setLogin({...login, [name]: value})
    }

    async function handleSubmit(e){
        e.preventDefault();
        try{
            await userService.login(login);
            props.handleSignUpOrLogin();
            navigate('/dashboard');
        }catch(err){
            setError(err.message)
        }
    }

    return(
        <Container className="py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <Card className="shadow-sm">
                        <Card.Body className="p-5">
                            <h1 className="text-center mb-4 fw-bold">Welcome Back</h1>
                            
                            {isDemoMode() && (
                                <div style={{
                                    backgroundColor: '#e3f2fd',
                                    border: '1px solid #2196f3',
                                    borderRadius: '4px',
                                    padding: '12px',
                                    margin: '20px 0',
                                    fontSize: '14px',
                                    textAlign: 'center'
                                }}>
                                    <strong>📊 Demo Mode:</strong> Use any email/password to try the demo!
                                    <br />
                                    <em>Example: demo@test.com / password123</em>
                                </div>
                            )}
                            
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        placeholder="Enter your email address"
                                        name="email"
                                        value={login.email}
                                        onChange={handleChange}
                                        required 
                                        size="lg"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Enter your password" 
                                        name="password"
                                        value={login.password} 
                                        onChange={handleChange}
                                        required
                                        size="lg"
                                    />
                                </Form.Group>
                                
                                <Button variant="primary" type="submit" className="w-100 mb-3" size="lg">
                                    Sign In
                                </Button>
                                
                                <div className="text-center">
                                    <p className="mb-0">Don't have an account? <Link to='/signup'>Create one here</Link></p>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    )
}