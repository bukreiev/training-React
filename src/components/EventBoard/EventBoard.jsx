// import PropTypes from 'prop-types';
import css from './EventBoard.module.css';
import EventItem from './EventItem';

export const EventBoard = ({ events }) => {
    return (
        <div className={css.board}>
        <ul className={css.list} >
            {events.map(event => (
                <EventItem
                    key={event.id}
                    title={event.title}
                    location={event.location}
                    author={event.author}
                    date={event.date}
                    time={event.time}
                />
            ))}
        </ul>
        </div>
    );
}