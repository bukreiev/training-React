import  { PageTitle }  from './components/PageTitle/PageTitle'
import { EventBoard } from 'components/EventBoard/EventBoard';
import events from './components/EventBoard/events.json'
import Counter from './components/Counter/Counter'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <PageTitle text="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>

      <EventBoard events={events}/>

      <Counter initValue = {0} />

    </div>
  );
};
