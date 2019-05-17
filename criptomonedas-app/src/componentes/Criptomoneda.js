import React from 'react';

const Criptomoneda = (props) => {
    //console.log(props);

    const { criptomoneda } = props;
    const { CoinInfo } = criptomoneda;
    const { FullName, Name } = CoinInfo;

    // console.log(FullName);
    // console.log(Name);

    return(
        <option value={Name}>{FullName}</option>
    );
}

export default Criptomoneda;