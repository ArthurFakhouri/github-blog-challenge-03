import { CardContainer, CardHeader } from "./styles";
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";
import { useNavigate } from "react-router-dom";

interface Publication {
    id: number;
    html_url: string;
    number: number;
    title: string;
    body: string;
    created_at: string;
    comments: number;
}

interface CardProps {
    publication: Publication;
}

export function Card({ publication }: CardProps) {

    const navigate = useNavigate();

    const publishedAt = formatDistanceToNow(
        new Date(publication.created_at),
        {
            locale: ptBR,
            addSuffix: true,
        }
    )

    function handleClickedCard() {
        navigate(`/post/${publication.number}`);
    }

    return (
        <CardContainer onClick={handleClickedCard}>
            <CardHeader>
                <strong>{publication.title}</strong>
                <time dateTime={publication.created_at}>{publishedAt}</time>
            </CardHeader>
            <p>{publication.body}</p>
        </CardContainer>
    )
}