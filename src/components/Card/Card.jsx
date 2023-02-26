import PropTypes from "prop-types";

import "./Card.scss"

const Card = ({post}) => {
    const {
        category,
        content ,    
        img_url,       
        title,      
        updated_at
    } = post;
    // I think I need url where the pics are 
    const IMG_URL = ""
    
    const dateNow = new Date(updated_at);
    const day = dateNow.getDate();
    const month = dateNow.getMonth() + 1;
    const year = dateNow.getFullYear();
    const url = `${IMG_URL}/${img_url}`

    return (
        <div className="card">
            <div className="card__img" style={{backgroundImage:{url}}}>
                <span className="card__img-date">{month}-{day}-{year}</span>
                <span className="card__img-category">{category.name}</span>
            </div>
            <div className="card__content-wrapper">
                <h2 className="card__title">{title}</h2>
                <p className="card__content">{content}</p>
            </div>       
        </div>
    )
}

Card.propTypes = {
    post: PropTypes.object
}

export default Card

