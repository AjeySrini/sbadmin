
import '../App.css';
import './Card.css';


const Card = () => {
    const cardData = [
        {
            text: 'Earning(Monthly)',
            value: '$40000',
            icon: 'fas fa-calendar fa-2x text-gray-300',
            color: '#4e73df',
            textWidth: '60%',
            valueWidth: '40%'
        },
        {
            text: 'Earning(Annual)',
            value: '$215000',
            icon: 'fas fa-dollar-sign fa-2x text-gray-300',
            color: '#1cc88a',
            textWidth: '60%',
            valueWidth: '40%'
        },
        {
            text: 'Tasks',
            value: '50%',
            icon: 'fas fa-clipboard-list fa-2x text-gray-300',
            color: '#36b9cc',
            textWidth: '20%',
            pogressWidth: "55%",
            valueWidth: '25%'
        },
        {
            text: 'Pending Request',
            value: '18',
            icon: 'fas fa-comments fa-2x text-gray-300',
            color: '#f6c23e',
            textWidth: '60%',
            valueWidth: '40%'
        },
    ];
    

    return (
        <div className="row px-4 ml-2 mt-4">
            {cardData.map((card, index) => (
                <div key={index} className="col-xl-3 col-md-6 mb-4  px-4">
                    <div className="card border-left-primary shadow !h-full py-2">
                        <div className="card-body">
                            <div className="flex flex-wrap item-center ml-0 mr-0">
                                <div className="w-full mr-2 flex flex-row">
                                    <div className='flex flex-col' style={{
                                        width: card.textWidth,
                                    }}>
                                        <div className="text-xs font-bold  uppercase mb-1" style={{
                                            color: card.color,
                                            width: '100%'
                                        }}>
                                            {card.text}
                                        </div>
                                        <div className="mb-0 font-bold text-gray-800 text-xl" style={{
                                            width: '100%',

                                        }}>
                                            {card.value}
                                        </div>
                                    </div>
                                    {index === 2 && (
                                        <div className='col' style={{
                                            width: card.pogressWidth,
                                            marginTop: '20px'
                                        }}>
                                            <div className="progress progress-sm mr-2">
                                                <div className="progress-bar bg-info" role="progressbar"

                                                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="col-auto" style={{
                                        display: 'flex',
                                        justifyContent: 'end',
                                        width: card.valueWidth
                                    }}>
                                        <i className={`${card.icon} text-gray-300`}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
           
         

        </div>
        

    );
};

export default Card;