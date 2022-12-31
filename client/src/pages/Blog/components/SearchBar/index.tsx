import { ChangeEvent, useContext, useState } from "react";
import { GithubInfoContext } from "../../../../contexts/GithubInfoContext";
import { Publications, SearchBarContainer } from "./styles";


export function SearchBar() {

    const { publications, fetchGithubPublications } = useContext(GithubInfoContext);

    function handleChangeFilter(event: ChangeEvent<HTMLInputElement>) {
        fetchGithubPublications(event.target.value);
    }

    return (
        <SearchBarContainer>
            <Publications>
                <strong>Publicações</strong>
                <span>{publications.length} publicações</span>
            </Publications>
            <input type="text" placeholder="Buscar conteúdo"
                onChange={handleChangeFilter} />
        </SearchBarContainer>
    )
}