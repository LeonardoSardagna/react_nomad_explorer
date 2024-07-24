import { Link2, Plus } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../../lib/axios";
import { TesteLink } from "../../../interface/linksProps";

interface LinksImportantProps {
    OpenCreateLink: () => void
    links: TesteLink[]
    setLinks: React.Dispatch<React.SetStateAction<TesteLink[]>>
}

export function LinksImportant({ OpenCreateLink, links, setLinks }: LinksImportantProps) {
    const { idTrip } = useParams()

    useEffect(() => {
        api.get(`/trips/${idTrip}/links`).then(response => setLinks(response.data))
    }, [idTrip, setLinks])

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>

            <div className="space-y-5">
                {links.map(link => (
                    <div key={link.title} className="flex justify-between items-center gap-4">
                        <div className="space-y-1.5 w-64">
                            <span className="block text-zinc-100 font-medium">{link.title}</span>
                            <a href="#" className=" block truncate text-zinc-400 text-xs">{link.url}</a>
                        </div>
                        <Link2 className="size-5 text-zinc-400 shrink-0" />
                    </div>
                ))}
            </div>
            <Button variant="secondary" size="full" onClick={OpenCreateLink}>
                <Plus className="size-5 text-zinc-200" />
                Cadastrar novo link
            </Button>
        </div>
    )
}
