import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../../components/button";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../lib/axios";
import { Category } from "../../../interface/categoryProps";

interface CreateActivityModalProps {
    CloseCreateActivityModal: () => void
    activities: Category[]
    setActivities: React.Dispatch<React.SetStateAction<Category[]>>
}

export function CreateActivityModal({ CloseCreateActivityModal, setActivities }: CreateActivityModalProps) {
    const { idTrip } = useParams()

    async function createActivity(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const title = data.get('title')?.toString()
        const occurs_at = data.get('occurs_at')?.toString()

        try {
            await api.post(`/trips/${idTrip}/activities`, {
                title,
                occurs_at
            })
            const response = await api.get(`/trips/${idTrip}/activities`);
            if (Array.isArray(response.data.activities)) {
                setActivities(response.data.activities);
            } else {
                console.error("Response data is not in the expected format:", response.data);
            }
            CloseCreateActivityModal()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-zinc-900 space-y-3 rounded-xl px-6 py-5 w-[540px]">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Cadastrar atividade</h2>
                    <button onClick={CloseCreateActivityModal}>
                        <X />
                    </button>
                </div>
                <p className="text-zinc-400">Todos convidados podem visualizar as atividades.</p>

                <form onSubmit={createActivity} className="space-y-3">

                    <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 rounded-lg h-14">
                        <Tag className="size-5 text-zinc-400" />
                        <input type="text" name="title" placeholder="Qual a atividade?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 " />
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2 flex-1 bg-zinc-950 px-4 rounded-lg h-14">
                            <Calendar className="size-5 text-zinc-400" />
                            <input type="datetime-local" name="occurs_at" placeholder="Quando" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 " />
                        </div>
                    </div>
                    <Button variant="primary" size="full">
                        Salvar atividade
                    </Button>
                </form>
            </div>
        </div>
    )
}
