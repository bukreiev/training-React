import css from './EventItem.module.css';
import { BsFillGeoFill, BsCalendarWeekFill } from 'react-icons/bs';
import { FaUserTie } from 'react-icons/fa'
import { MdAccessTimeFilled } from 'react-icons/md'

export default function EventItem({title, location, author, date, time}) {
    return (
        <li className={css.item}>
        <p className={css.title}>{title}</p>
        <p className={css.location}><BsFillGeoFill className={css.icon} size={18}/>{location}</p>
        <p className={css.author}><FaUserTie className={css.icon} size={18}/>{author}</p>
        <p className={css.date}><BsCalendarWeekFill className={css.icon} size={18}/>{date}</p>
        <p className={css.time}><MdAccessTimeFilled className={css.icon} size={18}/>{time}</p>
        </li>
    );
}

