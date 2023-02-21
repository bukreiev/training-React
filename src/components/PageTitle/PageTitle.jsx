import css from './PageTitle.module.css'
// import {text} from './title.json'


export const PageTitle = ({ text }) => {
    return  <div className={css.background}>
                <h1 className={css.title}>{text}</h1>
            </div>;         
};