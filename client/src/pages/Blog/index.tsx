import { useContext } from "react";
import { Card } from "./components/Card";
import { Profile } from "./components/Profile";
import { SearchBar } from "./components/SearchBar";
import { Cards } from "./styles";
import { GithubInfoContext } from "../../contexts/GithubInfoContext";

export function Blog() {

    const { user, publications } = useContext(GithubInfoContext);

    return (
        <div>
            <Profile user={user} />
            <SearchBar />
            <Cards>
                {publications.map(publication => <Card key={publication.id} publication={publication} />)}
            </Cards>
        </div>
    )
}