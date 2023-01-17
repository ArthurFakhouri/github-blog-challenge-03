import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserGroup, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Bio, Data, Info, ProfileContainer, Title } from "./styles";

interface User {
    avatar_url: string;
    html_url: string;
    bio: string;
    name: string;
    login: string;
    company: string;
    followers: number;
}

interface UserProps {
    user: User;
}

export function Profile({ user }: UserProps) {
    return (
        <ProfileContainer>
            <Avatar src={user.avatar_url} alt="user photo" />
            <Data>
                <Title>
                    <strong>{user.name}</strong>
                    <a target={"_blank"} href={user.html_url}>
                        GITHUB <FontAwesomeIcon className="fa-xs" icon={faArrowUpRightFromSquare} />
                    </a>
                </Title>
                <Bio>{user.bio}</Bio>
                <Info>
                    <span><FontAwesomeIcon icon={faGithub} />{user.login}</span>
                    <span><FontAwesomeIcon icon={faBuilding} />{user.company}</span>
                    <span><FontAwesomeIcon icon={faUserGroup} />{user.followers} seguidores</span>
                </Info>
            </Data>
        </ProfileContainer>
    )
}