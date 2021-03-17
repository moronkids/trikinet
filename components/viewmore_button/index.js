import React from 'react';

const Button = ({loading_redux, max}) => {
    return (
        <>
            <div className={`ViewMore mx-auto ${!max && 'd-none' }`} >
                {loading_redux ? <img src="/assets/spinner.svg" width="10px" height="10px"/> : "View More" }
            </div>
        </>
    );
};

export default Button;