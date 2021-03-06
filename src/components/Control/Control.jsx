import React from 'react';
import classes from './Control.module.css';

const isDisabled = (clickType, currentPosition, maxPosition) => {
    if (clickType === 'prev') {
        return currentPosition >= 0;
    } else {
        return currentPosition <= maxPosition;
    }
};

const Control = (props) => {
    const carouselWidthInView = props.data?.countItemsInView * props.data?.imgWidth;
    const maxCarouselPosition = props.data?.imagesAmount * props.data?.imgWidth - carouselWidthInView;
    const btnClasses = [classes.controlBtn, props.type === 'prev' ? classes.controlBtnPrev : null].join(' ');
    const changeSlideHandler = () => props.click(props.type);

    return (
        <button
            disabled={isDisabled(props.type, props.carouselPosition, - maxCarouselPosition)}
            className={btnClasses}
            aria-label='Переключение слайда'
            onClick={changeSlideHandler}
        />
    )
};

export default Control;
