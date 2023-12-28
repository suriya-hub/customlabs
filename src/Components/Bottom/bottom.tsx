const Bottom = (props: any) => {

    const { handleSave, handleCancel } = props;
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#f6f6f6', padding: '20px' }}>
                <button style={{
                    borderRadius: '5px', padding: '10px', backgroundColor: '#41b494', border: "none", color: 'white',
                    marginRight: '20px'
                }} onClick={() => handleSave()}>
                    Save the Segment</button>
                <button style={{ borderRadius: '5px', padding: '10px', backgroundColor: 'white', border: "none", color: '#d24572' }}
                    onClick={() => handleCancel()}>
                    Cancel </button>
            </div>
        </>
    )
}

export default Bottom;