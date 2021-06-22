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
        <div className="review-container ">
            <br />

            <h1 className="text-light">Reviews</h1>
            <ColoredLine className="hr" color="white" />
            <hr className="text-divider"/>
            <div className="review-holder">
            {/* <ul className="ul-container"> */}
                <div className="card text-white bg-info text-container">
                    <p className="text-light">Astounding! I had no idea Pluto was no longer a planet.</p>
                </div>
                <div className="card text-white bg-info text-container">
                    <p className="text-light">Ten stars for Saturn! Just the coolest.</p>
                </div>
                {commentArray.map((comment) => {
                    return(
                    
                <div className="card text-white bg-info text-container">
                    <p className="text-light" key={comment}>{comment}</p>
                    </div>
                )})}
            {/* </ul> */}
                <br/>
                <br/>
                <br/>
                


                <form onSubmit={handleSubmit}>
                    <label className="text-light" htmlFor="comment">Leave a Review: </label> <br/>
                    <input placeholder="Leave a comment...." className="comment-box"  type="text" id="comment" name="comment" value={newComment} onChange={(e)=>setNewComment(e.target.value)}></input>
                    <br/>

                    <input className="review-btn input" type="submit"></input>

                </form>
                
            </div>
        </div>
    )
}

export default CommentSection;
