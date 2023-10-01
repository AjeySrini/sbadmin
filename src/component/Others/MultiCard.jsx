import './Progress.css'

const MultiCard = () => {
    const cardData = [
        {
            text: 'Primary',
            colorText:'#4e73df',
            textColor:'white'
        },
        {
            text: 'Success',
            colorText:'#1cc88a',
            textColor:'white'
        },
        {
            text: 'Info',
            colorText:'#36b9cc',
            textColor:'white'
        },
        {
            text: 'Warning',
            colorText:'#f6c23e',
            textColor:'white'
        },
      
        {
            text: 'Danger',
            colorText:'#e74a3b',
            textColor:'white'
        },
        {
            text: 'Secondary',
            colorText:'#858796',
            textColor:'white'
        },
        {
            text: 'Light',
            colorText:'#f8f9fc',
            textColor:'black'
        },
        {
            text: 'Dark',
            colorText:'#5a5c69',
            textColor:'white'
        },
    ]
    return (
        <div className="card-row  ml-4 w-full">
        
        {cardData.map((card) => (
            <div className='col-lg-6 mb-4' key={card.text}>
            <div className="card  text-white shadow" style={{
                backgroundColor:card.colorText,
                color:card.textColor
            }}>
            <div className="card-body">
                {card.text}
                <div className="text-white-50 small" style={
                    {
                        color:card.textColor
                    }
                }>{card.colorText}</div>
            </div>
        </div>
            
            </div>
            ))}
            
        </div>
    )
}

export default MultiCard;