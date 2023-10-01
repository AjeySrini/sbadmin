import './Progress.css'
const ProgressBar = () => {
    const progressData = [
        {
            valuePerc: '20%',
            text: 'Server Migration',
            value: 20,
            color: '#e74a3b'
        },
        {
            valuePerc: '40%',
            text: 'Sales Tracking',
            value: 40,
            color: '#f6c23e'
        },
        {
            valuePerc: '60%',
            text: 'Customer Database',
            value: 60,
            color: '#4e73df'
        },
        {
            valuePerc: '80%',
            text: 'Payout Details',
            value: 80,
            color: '#36b9cc'
        },
        {
            valuePerc: 'Complete',
            text: 'Account Setup',
            value: 100,
            color: '#1cc88a'
        },
    ]

    // const cardData = [

    // ]

    return (
        <div className="flex flex-col  px-4 ml-4 mt-4 card shadow mb-4">
             <h6 className="m-0 font-bold text-primary">Progress </h6>
            {progressData.map((progress) => (
                <div className='flex flex-col w-full' key={progress.text} >
                    <div className="flex flex-row justify-between">
                    <div style={{
                        fontSize: '12px',
                        marginTop: "10px",
                        paddingTop: '10px',
                        
                    }}>{progress.text}
                    </div>
                    <div style={{
                        fontSize: '12px',
                        marginTop: "10px",
                        paddingTop: '10px'
                    }}>{progress.valuePerc}</div>
                    </div>
                    <div style={{
                        width: '100%',
                        height: '20px',
                        backgroundColor: '#eaecf4',
                        marginTop: '10px',
                        borderRadius: '0.35rem'
                    }}>
                        <div style={{
                            width: `${progress.value}%`,
                            height: '100%',
                            backgroundColor: progress.color
                        }}></div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default ProgressBar