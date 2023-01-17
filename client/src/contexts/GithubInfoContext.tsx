import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface User {
    avatar_url: string;
    html_url: string;
    bio: string;
    name: string;
    login: string;
    company: string;
    followers: number;
}

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

interface GithubInfoContextType {
    user: User;
    publications: Publication[];
    publication: Publication;
    fetchGithubPublications: (filter?: string) => void;
    fetchGithubIssue: (issueNumber: number) => void;
}

export const GithubInfoContext = createContext({} as GithubInfoContextType);

interface GithubInfoContextProvider {
    children: ReactNode;
}

export function GithubInfoContextProvider({ children }: GithubInfoContextProvider) {

    const [user, setUser] = useState({} as User);
    const [publications, setPublications] = useState([] as Publication[]);
    const [publication, setPublication] = useState({} as Publication);
    const username = 'ArthurFakhouri';
    const repo = 'github-blog-challenge-03';

    async function fetchGithubIssue(issueNumber: number) {
        const res = await api.get(`repos/${username}/${repo}/issues/${issueNumber}`);
        const data = res.data as Publication;
        const publication = {
            id: data.id,
            title: data.title,
            user_login: user.login,
            body: data.body,
            comments: data.comments,
            created_at: data.created_at,
            number: data.number,
            html_url: data.html_url
        }

        setPublication(publication)
    }

    async function fetchGithubUser() {
        const res = await api.get('users/ArthurFakhouri');
        const { avatar_url, bio, name, login, company, followers, html_url }: User = res.data;
        setUser({
            avatar_url,
            bio,
            name,
            login,
            company,
            followers,
            html_url
        })
    }

    async function fetchGithubPublications(filter?: string) {
        if (!filter)
            filter = '';
        const query = `${filter} repo:${username}/${repo} is:issue`;
        const res = await api.get('search/issues', {
            params: {
                q: query,
            }
        });
        const items = res.data.items as Publication[];
        const publications = items.map(item => {
            return {
                id: item.id,
                html_url: item.html_url,
                user_login: user.login,
                number: item.number,
                title: item.title,
                body: item.body,
                comments: item.comments,
                created_at: item.created_at
            }
        })
        setPublications(publications);
    }

    useEffect(() => {
        fetchGithubUser();
        fetchGithubPublications();
    }, [])

    return (
        <GithubInfoContext.Provider value={{
            user,
            publications,
            publication,
            fetchGithubPublications,
            fetchGithubIssue
        }}>
            {children}
        </GithubInfoContext.Provider>
    )
}