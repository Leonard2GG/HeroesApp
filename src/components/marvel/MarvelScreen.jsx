import React from 'react'
import { HeroList } from '../hero/HeroList';

export default function MarvelScreen() {
    return (
        <div>
            <h1>Marvel Heroes</h1>
            <hr />
            <HeroList publisher='Marvel Comics' />
        </div>
    )
}
