const index = (props) => {
    return (
        <div style={{height: "calc(100vh - 393px - 70px)"}}>
            {props.children}
        </div>
    );
};

export default index;