import { useEffect, useState } from "react";
import calcDiscount from "./calcDiscount";
import { useNavigate} from "react-router";

const Table = ({data}) => {
    const {phone, rating, ceo, type_partners, name, id} = data;
    const [discount, setDiscount] = useState(0);
    const navigation = useNavigate();

    useEffect(() =>{
        const getDiscount = async () => {
            const countData = await window.api.getCount(id);
            setDiscount(calcDiscount(countData))
        }
        getDiscount();
    }, [])

    const editHandle = () => {
        navigation('./update', {state: {...data}})
    }

    return <>
        <div className="table" onClick={editHandle}>
            <div className="table-info">
                <div>
                    {type_partners} | {name}
                </div>
                <div>{ceo}</div>
                <div>{phone}</div>
                <div>Рейтинг: {rating}</div>
            </div>
            <div className="discount">{discount} %</div>
        </div>
    </>
}

export default Table;