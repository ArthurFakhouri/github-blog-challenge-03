import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface IssueProps {
    body: string;
}

export function Issue({ body }: IssueProps) {
    return (
        <ReactMarkdown
            className="px-8 py-10 markdown"
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
        >
            {body}
        </ReactMarkdown>
    )
}