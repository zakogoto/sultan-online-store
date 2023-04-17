import packLiquid from "../../../resources/img/pack-liquid.svg"
import packSolid from "../../../resources/img/pack-box.svg"
import './volume.sass'
import { FC } from "react";
import { IProduct } from "../../../store/models/IProduct";

interface VolumeProps {
    item: IProduct;
}

const Volume: FC<VolumeProps> = ({item}) => { //const Volume: FC = ({type, value}) => {
    const type = item.isLiquid;
    const value = item.volume;
    let url = type ? packLiquid : packSolid;
    let altImg = type ? 'бутылка': 'коробка';
    let measure = type ? 'мл' : 'г'
    return(
        <div className="volume">
            <img src={url} alt={altImg} />
            <div className='volume__amount'>{value} {measure}</div>
        </div>
    )
}

export default Volume;