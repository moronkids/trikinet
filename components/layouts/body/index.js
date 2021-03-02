const index = (props) => {
    return (
        <div style={{minHeight: "calc(100vh - 393px - 70px)"}}>
            {props.children}
        </div>
    );
};

export default index;