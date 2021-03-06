/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { useCallback, useContext, useState } from 'react'
import { Container, Button, ButtonGroup } from 'reactstrap'
import Title from 'components/Utils/Title'
import { DarkContext } from 'helpers/user'
import EventCard from './EventCard'
import { styles, eventStyles } from './styles'

const eventList = [
  {
    date: '20/10',
    events: [
      {
        slug: 'essential_software_industry_skills',
        tags: ['workshop', 'social'],
        title: 'Essential Software Industry Skills',
        image: {
          src: 'https://source.unsplash.com/random',
          alt: 'Random Image'
        },
        time: '5:30pm',
        location: 'UWA Reid Library',
        desc:
          "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        slug: 'feathers_workshop',
        tags: ['workshop', 'social'],
        title: 'Feathers Workshop',
        image: {
          src: 'https://source.unsplash.com/random',
          alt: 'Random Image'
        },
        time: '5:30pm',
        location: 'UWA Reid Library',
        desc:
          "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
    ]
  },
  {
    date: '21/10',
    events: [
      {
        slug: 'essential_software_industry_skills',
        tags: ['workshop', 'social'],
        title: 'Essential Software Industry Skills',
        image: {
          src: 'https://source.unsplash.com/random',
          alt: 'Random Image'
        },
        time: '5:30pm',
        location: 'UWA Reid Library',
        desc:
          "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        slug: 'feathers_workshop',
        tags: ['workshop', 'social'],
        title: 'Feathers Workshop',
        image: {
          src: 'https://source.unsplash.com/random',
          alt: 'Random Image'
        },
        time: '5:30pm',
        location: 'UWA Reid Library',
        desc:
          "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
    ]
  }
]

const EventPage = () => {
  const [eventPast, setEventPast] = useState(false)
  const theme = useTheme()
  const isDark = useContext(DarkContext)

  const toggleEventPast = useCallback(() => setEventPast(true), [])
  const toggleEventUpcoming = useCallback(() => setEventPast(false), [])

  return (
    <div css={styles(theme)}>
      <Title typed>./events</Title>
      <Container className='my-md-5 py-5 bg-transparent rounded-0'>
        <ButtonGroup className='mb-5'>
          <Button
            outline={!eventPast}
            color={isDark ? 'secondary' : 'primary'}
            className='rounded-0 text-monospace px-4'
            onClick={toggleEventPast}
          >
            Past
          </Button>
          <Button
            outline={eventPast}
            color={isDark ? 'secondary' : 'primary'}
            className='rounded-0 text-monospace px-3'
            onClick={toggleEventUpcoming}
          >
            Upcoming
          </Button>
        </ButtonGroup>
        <div className='events'>
          {eventList.map(({ date, events }) => (
            <div key={date} css={eventStyles(theme, isDark, date)}>
              <div className='d-flex flex-column ml-3 ml-md-5 pl-lg-5'>
                {events.map(event => (
                  <EventCard key={event.slug} className='mb-4' {...event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default EventPage
