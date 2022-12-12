import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../styles/Review.css"


function AddReview(props) {
  

  return (
    <>
      <Modal close show={props.show} onHide={props.handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body> 
            <div className='pop-up'>
                <img src={"https://image.tmdb.org/t/p/w185" + props.movie.poster_path}/>
                <div>
                    <p>{props.movie.title}</p>
                    <p>{props.movie.release_date}</p>
                    <p>Action</p>
                </div>
            </div>

            <div>
                <input placeholder='rating'/>
                <input placeholder='review'/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleClose}>
            Submit
          </Button>
          <Button variant="default" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddReview
