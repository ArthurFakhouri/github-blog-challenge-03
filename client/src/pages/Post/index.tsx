import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GithubInfoContext } from "../../contexts/GithubInfoContext";
import { Issue } from "./components/Issue";
import { Actions, BodyIssue, Infos, PostContainer, PostHeader } from "./styles";

interface Publication {
    id: number;
    html_url: string;
    number: number;
    title: string;
    body: string;
    created_at: string;
    comments: number;
    user_login: string;
}

export function Post() {

    const params = useParams();
    const { publication, fetchGithubIssue } = useContext(GithubInfoContext);

    useEffect(() => {
        fetchGithubIssue(Number(params.issueNumber));
    }, [])

    const publishedAt = formatDistanceToNow(
        new Date(publication.created_at || Date.now()),
        {
            locale: ptBR,
            addSuffix: true,
        }
    )

    return (
        <PostContainer>
            <PostHeader>
                <Actions>
                    <Link to="/"><FontAwesomeIcon icon={faChevronLeft} />VOLTAR</Link>
                    <a target={"_blank"} href={publication.html_url}>
                        VER NO GITHUB<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </Actions>
                <strong>{publication.title}</strong>
                <Infos>
                    <span><FontAwesomeIcon icon={faGithub} />{publication.user_login}</span>
                    <span><FontAwesomeIcon icon={faCalendar} />{publishedAt}</span>
                    <span><FontAwesomeIcon icon={faComment} />{publication.comments} comentário(s)</span>
                </Infos>
            </PostHeader>
            <BodyIssue>
                <Issue body={publication.body}></Issue>
            </BodyIssue>
        </PostContainer>
    )
}