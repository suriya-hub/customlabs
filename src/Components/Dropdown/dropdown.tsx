import Select from "react-dropdown-select"

const Dropdown = (props: any) => {
    const { handleDropdownChange, selectedSchema, dropdownOptions, handleRemoveDropdown } = props;

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ width: '10px', height: '10px', backgroundColor: 'grey', borderRadius: '100%', marginRight: '10px' }} />
                <div style={{ width: '100%', marginRight: '10px' }}>
                    <Select
                        options={dropdownOptions}
                        values={selectedSchema}
                        onChange={(values) => handleDropdownChange(values)}
                        placeholder="Add schema to segment"
                    />
                </div>
                <div style={{
                    height: '30px', width: '30px', backgroundColor: '#f2fbf9', display: 'flex',
                    justifyContent: 'center', alignItems: 'center'
                }} onClick={() => handleRemoveDropdown()}>
                    <div style={{ width: '20px', height: '4px', borderRadius: '20%', backgroundColor: '#657a93' }}></div>
                </div>
            </div>
        </>
    )
}
export default Dropdown