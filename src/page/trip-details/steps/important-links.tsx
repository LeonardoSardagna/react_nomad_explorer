import { Link2, Plus, Trash2 } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { TesteLink } from "../../../interface/linksProps";
import { ConfirmDelete } from "./confirmDeletion";

interface LinksImportantProps {
    OpenCreateLink: () => void
    links: TesteLink[]
    setLinks: React.Dispatch<React.SetStateAction<TesteLink[]>>
}

export function LinksImportant({ OpenCreateLink, links, setLinks }: LinksImportantProps) {
    const { idTrip } = useParams()
    const [opentrash, setOpenTrash] = useState<string|null>(null)
    const [openModalExclude, setOpenModalExclude] = useState(false)
    const [linkToDelete, setLinkToDelete] = useState<string|null>(null)

    useEffect(() => {
        api.get(`/trips/${idTrip}/links`).then(response => setLinks(response.data))
    }, [idTrip, setLinks])

    async function DeleteLink(idLink: string) {
        await api.delete(`/trips/${idLink}/links`)
        setLinks(prevLinks => prevLinks.filter(link => link.id !== idLink))
        setOpenTrash(null)
        setOpenModalExclude(false)
    }

    function copyLink(url: string){
        navigator.clipboard.writeText(url).then(()=>{
            alert("Link Copiado: "+ url)
        })
    }

    function openModalConfimExclude(idLink: string) {
        setOpenModalExclude(true)
        setOpenTrash(null)
        setLinkToDelete(idLink)
    }

    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>

            <div className="space-y-5">
                {links.map(link => (
                    <div key={link.id} className="flex justify-between items-center gap-4 relative">
                        <div className="space-y-1.5 w-64">
                            <span className="block text-zinc-100 font-medium">{link.title}</span>
                            <a href="#" className=" block truncate text-zinc-400 text-xs">{link.url}</a>
                        </div>
                        <button title="Copiar" onClick={()=>copyLink(link.url)} className="hover:transition ease-in-out hover:scale-110 hover:duration-200">
                            <Link2 className="size-5 text-zinc-400 shrink-0 hover:text-purpleDark" />
                        </button>
                        <button title="Apagar" onClick={()=>openModalConfimExclude(link.id)} className="hover:transition ease-in-out hover:scale-110 hover:duration-200">
                        <Trash2 className="text-zinc-400 size-5 hover:text-red-500" />
                        </button>
                    </div>
                ))}
            </div>
            <Button variant="secondary" size="full" onClick={OpenCreateLink}>
                <Plus className="size-5 text-zinc-200" />
                Cadastrar novo link
            </Button>
            
            {openModalExclude &&(
              <ConfirmDelete
              onConfirm={()=>DeleteLink(linkToDelete ? linkToDelete : '')}
              OnCancel={()=> setOpenModalExclude(false)}
              />  
            )}
        </div>
    )
}
