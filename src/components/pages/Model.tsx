import React from 'react';
import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";

export const Model = () => {
    const params = useParams()
    const currentModel = adidasArr.find(el => el.id === Number(params.id))

    return (
        <div>
            {currentModel
                ? <>
                    <h2>{adidasArr[Number(params.id)].model}</h2>
                    <h2>{adidasArr[Number(params.id)].collection}</h2>
                    <h2>{adidasArr[Number(params.id)].price}</h2>
                    <img src={adidasArr[Number(params.id)].picture}
                         alt={adidasArr[Number(params.id)].model}
                         style={{width: '600px', height: 'auto', marginRight: '10px'}}
                    />
                </>
                : <div>Don't have this model</div>
            }
        </div>
    )
}




// export const Model2 = () => {
//     const { id } = useParams();
//     const currentModel = adidasArr.find(el => el.id === Number(id));
//
//     if (!currentModel) {
//         return <div>Don't have this model</div>;
//     }
//
//     const { model, collection, price, picture } = currentModel;
//
//     return (
//         <div>
//             <h2>{model}</h2>
//             <h2>{collection}</h2>
//             <h2>{price}</h2>
//             <img
//                 src={picture}
//                 alt={model}
//                 style={{ width: '600px', height: 'auto', marginRight: '10px' }}
//             />
//         </div>
//     );
// };