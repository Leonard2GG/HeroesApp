import React from 'react'
import { HeroList } from '../hero/HeroList';

export default function DCScreen() {
    return (
        <>
            <h1>DC Heroes</h1>
            <hr />
            <HeroList publisher='DC Comics' />
        </>
    )
}
