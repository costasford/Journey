import { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';
import userService from '../../utils/userService';
import { isDemoMode } from '../../utils/apiWrapper';

export default function SignUp(props){

    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [selectedFile, setSelectedFile] = useState('');
    const [signup, setSignUp] = useState({
        email: '',
        password: ''
    })

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        setSignUp({...signup, [name]: value});
    }

    async function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', selectedFile);
        for(let key in signup){
            console.log(key, signup[key].photo)
            formData.append(key, signup[key])
        }
        try {
            await userService.signup(formData);
            props.handleSignUpOrLogin()
            navigate('/dashboard')
        }catch(err){
            console.log(err.message)
            setError(err.message)
        }
    }

    function handleFileInput(e){
        console.log(e.target.files)
        setSelectedFile(e.target.files[0])
    }

    return(
        <Container className="py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <Card className="shadow-sm">
                        <Card.Body className="p-5">
                            <h1 className="text-center mb-4 fw-bold">Create Account</h1>
                            
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
                                    <strong>📝 Demo Mode:</strong> Use any email/password to create a demo account!
                                    <br />
                                    <em>No real account will be created</em>
                                </div>
                            )}
                            
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email Address *</Form.Label>
                                    <Form.Control 
                                        type="email" 
                                        name="email"
                                        placeholder="Enter your email address" 
                                        onChange={handleChange}
                                        value={signup.email}
                                        required
                                    />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password *</Form.Label>
                                    <Form.Control 
                                        type="password" 
                                        name="password"
                                        placeholder="Create a secure password" 
                                        onChange={handleChange}
                                        value={signup.password}
                                        required
                                    />
                                </Form.Group>
                                
                                {!isDemoMode() && (
                                    <Form.Group controlId="formFile" className="mb-4">
                                        <Form.Label>Profile Photo (Optional)</Form.Label>
                                        <Form.Control 
                                            type="file" 
                                            name="photo"
                                            onChange={handleFileInput}
                                            accept="image/*"
                                        />
                                    </Form.Group>
                                )}
                                
                                <Button variant="primary" type="submit" className="w-100 mb-3" size="lg">
                                    Create Account
                                </Button>
                                
                                <div className="text-center">
                                    <p className="mb-0">Already have an account? <Link to='/login'>Sign in here</Link></p>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Container>
    )
}