import { useForm } from '../../hooks/useForm'
import { useMemo } from 'react';
import getHeoresByName from '../../helpers/getHeoresByName';
import { HeroCard } from '../hero/HeroCard'
import { useNavigate, useLocation } from 'react-router';
import queryString from 'query-string';


export default function SearchScreen() {

    const navigate = useNavigate();
    const location = useLocation()

    const { q = '' } = queryString.parse(location.search)

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    })

    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getHeoresByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
    }
    return (
        <div>
            <h1>Searchs</h1>
            <hr />

            <div className='row animate__animated animate__fadeIn'>
                <div className='col-4'>
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder='Search for a hero...'
                            className='form-control mb-2 border-1'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                            style={{ outline: 'none', boxShadow: 'none' }}
                        />

                        <button
                            className='btn btn-info text-info bg-primary-subtle'
                            data-bs-theme="dark"
                            type='submit'
                            onClick={handleSearch}>
                            Search
                        </button>

                    </form>
                </div>
                <div className='col-8 mb-3 '>

                    {
                        (q === '')
                            ? ''
                            : (heroesFiltered.length === 0)
                                ? <div className='alert alert-danger text-center'>No results</div>
                                : null
                    }
                    <div className="row g-3 justify-content-center">
                        {heroesFiltered.length === 1 ? (
                            <div className="col-6 d-flex justify-content-center">
                                <div style={{ maxWidth: '350px', width: '100%' }}>
                                    <HeroCard key={heroesFiltered[0].id} {...heroesFiltered[0]} />
                                </div>
                            </div>
                        ) : (
                            heroesFiltered.map((hero) => (
                                <div className="col-md-4 col-sm-6 d-flex justify-content-center" key={hero.id}>
                                    <HeroCard {...hero} />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
