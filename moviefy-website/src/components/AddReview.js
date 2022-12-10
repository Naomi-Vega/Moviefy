import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AddReview.css'


function AddReview(props) {
  const [rating, setRating] = useState("")
  const [review, setReview] = useState("")
  const addReview = async () => {
    const res = await axios.post ("/review", {
      rating: +rating,
      review,
      movie:props.movie.id
    },{
      headers:{
        Authorization:localStorage.getItem("token")
      }
    })
    console.log(res.data)
  }

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
                    <h4>{props.movie.title}</h4>
                    <p>{props.movie.release_date}</p>
                    <p>Action</p>
                </div>
            </div>

            <div>
                <input value={rating} onChange={(e)=> setRating(e.target.value)} placeholder='rating'/>
                <input value={review} onChange={(e)=> setReview(e.target.value)} placeholder='review'/>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addReview}>
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
