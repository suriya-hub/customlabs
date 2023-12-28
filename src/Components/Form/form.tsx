import { useState } from "react"
import Dropdown from "../Dropdown/dropdown"
import DropdownSchema from "../Dropdown/dropdownschema"
import Options from "../../Utils/dummydata"


const Form = (props: any) => {

    const { setSegmentName, setDropdownOptionsSchemas, dropdownOptionsSchemas, segmentName } = props

    const [selectedSchema, setSelectedSchema] = useState<any>(undefined)
    const [dropdownOptions, setDropdownOptions] = useState<any>(Options)

    const handleDropdownChange = (dat: any) => {
        setSelectedSchema(dat)
    }

    const handleAddSchema = () => {
        const filteredPeople = (dropdownOptions || []).filter((item: any) => item?.id !== selectedSchema[0]?.id);
        setDropdownOptions(filteredPeople)
        setSelectedSchema(undefined)
        setDropdownOptionsSchemas([...dropdownOptionsSchemas, selectedSchema[0]]);
    }

    return (
        <>
            <div style={{ padding: '30px', gap: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ marginBottom: '10px' }}>Enter the name of the segment</span>
                    <input style={{ padding: '10px', border: '2ps solid grey' }} placeholder="Name of the segmant"
                        onChange={(e) => setSegmentName(e.target.value)} value={segmentName} />
                </div>
                <div >
                    <span>To save your segment, you need to add schemas to build the query</span>
                </div>
                <div style={{
                    display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: '20px'
                }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ width: '10px', height: '10px', backgroundColor: '#5ddb78', borderRadius: '100%' }}></div>
                        <div style={{ fontSize: 'small' }}>- User Traites</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ width: '10px', height: '10px', backgroundColor: '#d24572', borderRadius: '100%' }}></div>
                        <div style={{ fontSize: 'small' }}>- Group Traites</div>
                    </div>
                </div>

                {dropdownOptionsSchemas.length > 0 && <div style={{ border: '2px solid #39aebc', padding: '10px' }}>
                    {dropdownOptionsSchemas.map((datSchema: any) => {
                        return (
                            <div key={datSchema.id} style={{ marginBottom: '10px', marginTop: '10px' }}>
                                <DropdownSchema options={dropdownOptions} values={datSchema} />
                            </div>
                        )
                    })}
                </div>}

                <div>
                    <Dropdown
                        handleDropdownChange={handleDropdownChange}
                        selectedSchema={selectedSchema}
                        dropdownOptions={dropdownOptions}
                        handleRemoveDropdown={() => setSelectedSchema(undefined)} />
                </div>
                <div onClick={() => selectedSchema && selectedSchema.length > 0 && handleAddSchema()}>
                    <div style={{ color: '#39aebc', textDecoration: 'underline', fontSize: 'medium', cursor: 'pointer' }}>+ Add new schema</div>
                </div>
            </div>
        </>
    )
}
export default Form