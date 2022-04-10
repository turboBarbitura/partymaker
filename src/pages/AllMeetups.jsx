import React, {useState, useEffect} from 'react'
import MeetupList from '../components/meetups/MeetupList'

const AllMeetupsPage = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(()=>{
    setIsLoading(true)
    fetch(
      'https://react-getting-started-28c43-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    ).then(response=>{
      return response.json()
    }).then(data=>{
      const meetups = []
      for (let key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }
      setIsLoading(false)
      setLoadedMeetups(meetups)
    })
  }, [])

  

  if (isLoading) {
    return (<section>
      <p>Loading</p>
    </section>
    )
  }

  return (
    <section> 
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}/>
    </section>
  )
}

export default AllMeetupsPage