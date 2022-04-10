import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useNavigate} from 'react-router-dom'

const NewMeetupPage = () => {

  // Хук из роутер дома, который отвечает за историю
  const history = useNavigate()

  const onAddMeetupHandler = (meetupData) => {
    fetch(
      'https://react-getting-started-28c43-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(()=>{ 
      // После того, как запрос на отправку данных будет выполнен, хук вернут на начальную страницу
      history('/')
    })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage
