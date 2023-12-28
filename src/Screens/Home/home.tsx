import { useState } from "react";
import Popup from "../../Components/Popup/popup";


const Home = () => {
    const [saveSegmant, setSaveSegment] = useState<boolean>(false);

    return (
        <>
            <div style={{ display: 'flex', backgroundColor: '#39aebc', height: '80px' }}> </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}
                onClick={() => setSaveSegment(true)}>
                <button style={{ border: '2px solid white', backgroundColor: 'transparent', padding: '10px' }}>
                    Save Segment
                </button>
            </div>
            {saveSegmant && <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}
            >
                <div style={{ background: 'white' }}>
                    <Popup setSaveSegment={setSaveSegment} />
                </div>
            </div>}
        </>
    );
};

export default Home;
