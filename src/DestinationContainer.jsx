import React from 'react';
import destinations from './destinations';
import DestinationCard from './DestinationCard';

const DestinationContainer = () => {
    return (
        <div>
            <h1>Travel Destination</h1>
            <div>
                {destinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
            
        </div>
    );
}

export default DestinationContainer;
