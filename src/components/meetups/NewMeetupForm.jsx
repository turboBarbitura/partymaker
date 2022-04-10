import React, {useRef} from 'react'
import Card from '../ui/Card'
import style from './NewMeetupForm.module.css'


const NewMeetupForm = (props) => {

	const titleInputRef = useRef()
	const imageInputRef = useRef()
	const addressInputRef = useRef()
	const descriptionInputRef = useRef()

  const submitHandler = (e) => {
		e.preventDefault()

		const enteredTitle = titleInputRef.current.value
		const enteredImage = imageInputRef.current.value
		const enteredAddress = addressInputRef.current.value
		const enteredDescription = descriptionInputRef.current.value

		const meetupData = {
			title: enteredTitle,
			image: enteredImage,
			address: enteredAddress,
			description: enteredDescription,
		}
		props.onAddMeetup(meetupData)
		
	}

  return (
    <Card>
      <form className={style.form} onSubmit={submitHandler} >
        <div className={style.control}>
          {/* htmlFor - атрибут для связываения лейбла с айди инпута */}
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={style.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={style.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef}/>
        </div>
        <div className={style.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={style.actions}>
            <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
