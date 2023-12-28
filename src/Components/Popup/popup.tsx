import { MdChevronLeft } from "react-icons/md";
import Form from "../Form/form";
import Bottom from "../Bottom/bottom";
import { useState } from "react";
import axios from "axios";

const Popup = (props: any) => {

    const { setSaveSegment } = props;

    const [segmentName, setSegmentName] = useState('')
    const [dropdownOptionsSchemas, setDropdownOptionsSchemas] = useState<any>([])

    const handleSave = () => {
        const reqObj = {
            segment_name: segmentName,
            schema: dropdownOptionsSchemas.map((item: any) => ({ [item.value]: item.label }))
        };
        handlePress(reqObj)
    }

    const handlePress = async (reqObj: any) => {
        const webhookUrl = 'https://webhook.site/f3c60e41-ab4e-47bd-a34e-2ecc18967b4c';
        try {
            const response = await axios.post(webhookUrl, {
                data: reqObj
            });
            console.log(response);
            if (response.status === 200) {
                setSegmentName('')
                setDropdownOptionsSchemas([])
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancel = () => {
        setSaveSegment(false)
        setSegmentName('')
        setDropdownOptionsSchemas([])
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ display: 'flex', backgroundColor: '#39aebc', height: '80px', alignItems: 'center' }}>
                        <MdChevronLeft size={32} color="white" />
                        <div style={{ color: 'white', }}>Saving Segmant</div>
                    </div>
                    <Form
                        setSegmentName={setSegmentName}
                        setDropdownOptionsSchemas={setDropdownOptionsSchemas}
                        dropdownOptionsSchemas={dropdownOptionsSchemas}
                        segmentName={segmentName}
                    />
                </div>
                <Bottom handleSave={handleSave} handleCancel={handleCancel} />
            </div>
        </div>
    )
}

export default Popup;