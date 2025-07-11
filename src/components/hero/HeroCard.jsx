import { useNavigate } from 'react-router'

export function HeroCard({ id, superhero, alter_ego, first_appearance, characters }) {
    const navigate = useNavigate()

    const handleHero = () => {
        navigate(`/hero/${id}`)
    }
    return (
        <div className='col'>
            <div className='card'>
                <img src={`src/assets/${id}.jpg`} className='card-img-top btn' onClick={handleHero} alt={superhero} />
                <div className='card-body'>
                    <h5 className='card-title'>{superhero}</h5>
                    <p className='card-text'>{alter_ego}</p>
                    <p className='card-text'><small className='text-muted'>{first_appearance}</small></p>
                    <p className='card-text'>{characters}</p>
                </div>
            </div>
        </div>
    )
}
