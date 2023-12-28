import Select from "react-dropdown-select"

const DropdownSchema = (props: any) => {
    const { options, values } = props;
    console.log(values, 'values')

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div style={{ width: '10px', height: '10px', backgroundColor: values.traites ? '#d24572' : '#5ddb78', borderRadius: '100%', marginRight: '10px' }} />
                <div style={{ width: '100%', marginRight: '10px' }}>
                    <Select
                        options={options}
                        values={[values]}
                        onChange={(val) => console.log(val)}
                        placeholder="Add schema to segment"
                    />
                </div>
                <div style={{ height: '30px', width: '30px', backgroundColor: '#f2fbf9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ width: '20px', height: '4px', borderRadius: '20%', backgroundColor: '#657a93' }}></div>
                </div>
            </div>
        </>
    )
}
export default DropdownSchema