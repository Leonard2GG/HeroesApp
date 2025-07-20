import { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export function HeroList({ publisher }) {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
    return (
        <div className='row row-cols-1 row-cols-md-5 g-3 mb-3 animate__animated animate__fadeIn'>
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
