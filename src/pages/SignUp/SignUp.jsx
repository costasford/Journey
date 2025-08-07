import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import './SignUp.css';
import userService from '../../utils/userService';

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
        <>
            <h1 className="sign-up-title">Sign Up</h1>
            <Form className="sign-up-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email"
                    placeholder="Enter email" 
                    onChange={handleChange}
                    value={signup.email}
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password" 
                    name="password"
                    placeholder="Password" 
                    onChange={handleChange}
                    value={signup.password}
                    />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control 
                    type="file" 
                    name="photo"
                    onChange={handleFileInput}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>Already have an account? Click <Link to='/login'>Here</Link></p>
            </Form>
        </>
    )
}