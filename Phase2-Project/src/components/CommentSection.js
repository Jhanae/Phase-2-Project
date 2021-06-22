import React, {useState} from 'react'
import image from "../Pictures/space.jpeg"

function CommentSection(){
    const [commentArray, setCommentArray]=useState([])
    const [newComment, setNewComment]=useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log(newComment)
        setCommentArray([...commentArray,newComment])
    }

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 0.5,
                width: 6
            }}
        />
    );

    return (
        <div className="review-container">
            <br />

            <h1 className="text-light">Reviews</h1>
            <ColoredLine className="hr" color="white" />
            <hr className="text-divider"/>
            <div>
            <ul>
                    <li className="text-light">Astounding! I had no idea Pluto was no longer a planet.</li>
                    <li className="text-light">Ten stars for Saturn! Just the coolest.</li>
                {commentArray.map((comment)=><li className="text-light" key={comment}>{comment}</li>)}</ul>
                <form onSubmit={handleSubmit}>
                    <label className="text-light" htmlFor="comment">Leave a Review: </label> <br/>
                    <input className="form-control"  type="text" id="comment" name="comment" value={newComment} onChange={(e)=>setNewComment(e.target.value)}></input>
                    <br/>
                    <input className="form-input-btn input form-input sumbit-button" type="submit"></input>
                </form>
                
            </div>
        </div>
    )
}

export default CommentSection;
