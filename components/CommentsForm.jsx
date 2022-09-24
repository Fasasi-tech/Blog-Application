import React, { useRef,useState, useEffect } from 'react';
import {submitComment} from '../services'
function CommentsForm({slug}){
    const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });
  const commentEl=useRef();
  const nameEl=useRef();
  const emailEl=useRef();
  const storeDataEl=useRef();

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
    };
    setFormData(initalFormData);
  }, []);

  const handleCommentSubmission=()=>{
    setError(false)
    const {value:comment}=commentEl.current
    const {value:name}=nameEl.current
    const {value:email}=emailEl.current
    const {checked:storeData}=storeDataEl.current
    if (!comment||!name||!email){
        setError(true)
        return;

    }
    const commentObj={name,email,comment,slug}
    if (storeData){
        localStorage.setItem('name',name);
        localStorage.setItem('email', email);
    }else{
        localStorage.removeItem('name');
        localStorage.removeItem('email');
    }
    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      });
  }
  
    return (
        <div className="commentsForm">
           <h3 className="commentsForm_heading">Leave a Reply</h3> 
           <div className='comments_grid'>
            <textarea ref={commentEl} className='textarea' placeholder='Comment' name='comment' />
            </div>
            <div className='comments_grid_div'>
                <div className='comments_grid'>
                <input type='text' ref={nameEl} className='textareas' placeholder='Name' name='name' />
                </div>
                <div className='comments_grid'>
                <input type='email' ref={emailEl} className='textareas' placeholder='Email' name='Email' />
                </div>
            </div>
            <div className='checkbox'>
                <div>
                    <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData' value='true'/>
                    <label className='label' htmlFor='storeData'>save my e-mail and name for the next time I comment.</label>
                </div>

            </div>
            {error && <p className='error_paragraph'>All fields are required</p>}
            <div className='button_comment_div'>
                <button type='button' onClick={handleCommentSubmission} className='commentButton'>
                    Post Comment
                </button>
                {showSuccessMessage && <span className='comment_span'>Comment submitted for review</span>}
            </div>
        </div>
        
    )
}
export default CommentsForm