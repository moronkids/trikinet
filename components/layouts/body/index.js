const index = (props) => {
    return (
        <div style={{minHeight: "calc(100vh - 393px - 70px)", minWidth: "100vw !important"}}>
        <div>
            {props.children}
        </div>
        </div>
    );
};

export default index;