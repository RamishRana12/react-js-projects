import React from 'react'
import './footer.css'
import logo from './logoimage/Logo-2.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {motion} from 'framer-motion'
function Footer() {
  return (
    <>
      
      <motion.footer class="footer "initial={{opacity:0,translateY:'30%'}}
      whileInView={{opacity:1,translateY:0}}
      transition={{duration:1.2}} viewport={{once:true}} >
  
  <div class="img-footer">
    <img src={logo}/>
    <div class="footer-para-one">
    <p>Build an interactive Unity marketplace with responsive design, cross-platform support, and real-time integration for seamless transactions and updates.</p>
  </div>
  </div>
  <div class="footer-paras ">
    <p class="pages">pages</p>
    <p>Home</p>
    <p>unity</p>
    <p>3d</p>
    <p>contact</p>

  </div>
  <div class="footer-paras ">
    <p class="pages">Category</p>
    <p>3D</p>
    <p>Templates</p>
    <p>GUI</p>
    <p>Animations</p>
  </div>

  <div class="social-links col-lg-4 col-sm-12 col-md-6">
  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
  </motion.footer>

    </>
  )
}

export default Footer
