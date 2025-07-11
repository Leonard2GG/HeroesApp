import { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router'
import { getHeroeById } from '../../helpers/getHeroesById';


export default function HeroScreen() {

    const { heroeId } = useParams();
    const hero = useMemo(() => getHeroeById(heroeId), [heroeId])
    const navigate = useNavigate()

    const handleReturn = () => {
        navigate(-1)
    }

    if (!hero) {
        return <Navigate to='/marvel' />
    }
    const imagePath = `/src/assets/${hero.id}.jpg`
    return (
        <div className='row mt-2'>
            <div className='col-4'>
                <img src={imagePath} alt={hero.superhero} onClick={handleReturn} className='img-thumbnail mb-2 btn' />
            </div>
            <div className='col-8'>
                <h3>{hero.superhero}</h3>
                <ul className=' list-group list-group-flush'>
                    <li className='list-group-item'><b className='text-info'>Alter ego:</b> {hero.alter_ego}</li>
                    <li className='list-group-item'><b className='text-info'>Publisher:</b> {hero.publisher}</li>
                    <li className='list-group-item'><b className='text-info'>First Appereance:</b> {hero.first_appearance}</li>
                    <li className='list-group-item'><b className='text-info'>Character:</b> {hero.characters}</li>
                </ul>
            </div>
        </div>
    )
}
