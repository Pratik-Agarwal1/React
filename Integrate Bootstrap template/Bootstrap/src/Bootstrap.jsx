import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import  Button  from 'bootstrap'

import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSlack } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";


function Bootstrap() {
  return (
    <div>
      <div >
        <Row className='text-left m-5'>


          <Col xs={6} lg={6} md={6} sm={6} >
            <h1>Hi,Hi, I'm Pratik Agarwal</h1>
            <br />
            <h5 className='text-secondary'>
              A web designer from Surat. I convert custom
              <br />web designer to bootstrap templates.
            </h5>
            <br />
            <h5 className='text-secondary'>I make YOUTUBE videos and write Blog.</h5>
            <br />
            {/* <Button type='button' className="btn btn-primary">I'm AVAILABLE</Button> */}
            <br />


            <FaTwitter className='text-secondary m-2' />
            <FaLinkedin className='text-secondary m-2' />
            <RiInstagramFill className='text-secondary m-2' />
            <FaSlack className='text-secondary m-2' />
            <IoLogoWhatsapp className='text-secondary m-2' />
        </Col>
          <Col xs={6} md={6} lg={6} sm={6}>
            <img style={{marginLeft:'-20%'}} src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1720396800&semt=ais_user" width="800px" height="500px" />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Bootstrap
