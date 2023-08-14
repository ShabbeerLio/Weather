import React, { useState } from 'react'
import "./LeftSide.css"
import weatherData from '../WeatherData'
import Carousel from 'react-bootstrap/Carousel'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const LeftSide = () => {

    const [openForm, setOpenForm] = useState();
    console.log(openForm)

    return (
        <div className='leftSide'>
            {/* <img src="https://images.unsplash.com/photo-1691533540643-3111545cd822?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" /> */}
            <div className="top">
                <div className="add">
                    <span class="material-icons" onClick={() => setOpenForm(true)}>
                        add_box
                    </span>
                    <MyVerticallyCenteredModal
                        show={openForm}
                        onHide={() => setOpenForm(false)}
                    />
                </div>
                {/* <div className="slider">
                    slide
                </div> */}
                <div className="tcChange">
                    <Form>
                        <span>C&deg;</span>
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                        />
                        <span>F&deg;</span>
                    </Form>
                </div>
            </div>
            <div>
            </div>

            <div className="weathericons">
                <Carousel >
                    {weatherData.map((data) => (
                        <Carousel.Item key={data.id}>
                            <Carousel.Caption>
                                <div className="location">
                                    <div className="locationD">
                                        <span class="material-icons">
                                            near_me
                                        </span>
                                        <p>{data.city}</p>
                                    </div>
                                    <div className="locationTime">
                                        <p>{data.risetime}</p>
                                    </div>
                                </div>
                                <div className="date">
                                    <div className="locationDate">
                                        <p>Today 12 aug</p>
                                    </div>
                                    <div className="locationTime">
                                        <p>{data.settime}</p>
                                    </div>
                                </div>
                                <div className="temp">
                                    <h1>{data.temperature}&deg;</h1>
                                </div>
                                <div className="weathers">
                                    <span class="material-icons">
                                        light_mode
                                    </span>
                                    <h5>{data.condition}</h5>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Search location
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Search</h4>
                <p>
                    Search Items........
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default LeftSide
