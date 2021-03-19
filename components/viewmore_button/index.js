import React from 'react';

const Button = ({data, max}) => {
    return (
        <>
            <div className={`ViewMore mx-auto ${data || !max  ? ' d-none' : '' }`} >
                View More
                {/* {data ? <img src="/assets/spinner.svg" width="10px" height="10px"/> : "View More" } */}
            </div>
        </>
    );
};

export default Button;