import { useEffect, useState } from "react"
import Table from "./Table"


const Tables = () => {
    const [partners, setPartners] = useState();

    useEffect(() => {
        const geetData = async () => {
            const data = await window.api.getPartners()
            setPartners(data)
        }
        geetData();
    }, [])
    console.log(partners)
    return <>
        <div className="tables">
            {partners?.map((el) => {
                return (<Table key={el.id} data={el}/>)
                })}
        </div>
    </>
}

export default Tables;