import { useEffect, useState } from "react";
import { Link, useLocation} from "react-router";

const CreatePartners = () => {

    const [type_partners, setTypePartners] = useState();
    const [name, setName] = useState();
    const [ceo, setCeo] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [addres, setAddres] = useState();
    const [inn, setInn] = useState();
    const [rating, setRating] = useState();

    const handleSubmit = async () => {
        const data = {type_partners, name, ceo, email, phone, addres, inn, rating}
        await window.api.createPartners(data);
    }

    return <>
        <div>
            <div>
                <div className="name-input">Тип партнера</div>
                <input value={type_partners} onChange={(e) => setTypePartners(e.target.value)} type="text" className="input" />
            </div>
            <div>
                <div className="name-input">Имя</div>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="input" />
            </div>
            <div>
                <div className="name-input">Директор</div>
                <input value={ceo} onChange={(e) => setCeo(e.target.value)} type="text" className="input" />
            </div>
            <div>
                <div className="name-input">Емаил</div>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="input" />
            </div>
            <div>
                <div className="name-input">Телефон</div>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="input" />
            </div>
            <div>
                <div className="name-input">Адресс</div>
                <input value={addres} onChange={(e) => setAddres(e.target.value)} type="text" className="input" />
            </div>
            <div>
                <div className="name-input">Инн</div>
                <input value={inn} onChange={(e) => setInn(e.target.value)} type="text" className="input" />
            </div>
            <div>
                <div className="name-input">Рейтинг</div>
                <input value={rating} onChange={(e) => setRating(e.target.value)} type="number" className="input" />
            </div>
            <div className="btns">
                <Link to='/'>
                    <button>назад</button>
                </Link>
                <Link to='/'>
                    <button onClick={handleSubmit} >Создать партнера</button>
                </Link>
            </div>
        </div>
    </>;
};

export default CreatePartners;