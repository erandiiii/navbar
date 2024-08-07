import React from 'react'
import { CiYoutube } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md'
import ProductsMegamenu from './components/ProductsMegamenu';
import './Nav.scss'
import { BsTriangleFill } from 'react-icons/bs';

const Nav = () => {
    console.log("Nav component is rendering");
    return (
        <div className="nav">

            <Link className='title' to='/'>
            <CiYoutube /> Title
            </Link>



            <div className='links'>
                <div className="nav-link">
                    <Link   to='/' className='inner-link'>Products <MdKeyboardArrowDown /></Link>
                    <BsTriangleFill className='arrow'/>
                    <ProductsMegamenu />
                </div>

                <div className="nav-link">
                    <Link to='/' className='inner-link'>Blog</Link>
                </div>

                <div className="nav-link">
                    <Link to='/' className='inner-link'>About us</Link>
                </div>

                <div className="nav-link">
                    <Link to='/' className='inner-link'>Support</Link>

                </div>
            </div>

            <div className="auth">
                <Link to='/'>Log in</Link>
                <Link to='/'  className='sign-up'>Sign Up</Link>
            </div>

        </div>
    )
}

export default Nav