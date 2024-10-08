import { CircleCheck, Plus, Trash2 } from "lucide-react";
import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Category } from "../../../interface/categoryProps";
import { ConfirmDelete } from "./confirmDeletion";

interface ActivityProps {
    OpenCreateActivityModal: () => void
    activities: Category[]
    setActivities: React.Dispatch<React.SetStateAction<Category[]>>
}

export function Activity({ OpenCreateActivityModal, activities, setActivities }: ActivityProps) {
    const { idTrip } = useParams()
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [activityId, setActivityId]= useState<string|null>(null)

    useEffect(() => {
        const fetchActivities = async () => {
            try {
                const response = await api.get(`/trips/${idTrip}/activities`);
                if (Array.isArray(response.data.activities)) {
                    setActivities(response.data.activities);
                } else {
                    console.error("Response data is not in the expected format:", response.data);
                }
            } catch (error) {
                console.error("Error fetching activities:", error);
            }
        };
        fetchActivities();
    }, [idTrip, setActivities]);

    async function DeleteActivity(id:string){
        await api.delete(`/trips/${id}/activities`)
        setOpenModalDelete(false)
        setActivities(prevState => prevState.map(activitiesTrip => ({
            ...activitiesTrip,
            activities: activitiesTrip.activities.filter(activity => activity.id !== id)
        })))
    }

    function OpenModalDelete(id:string){
        setOpenModalDelete(true)
        setActivityId(id)
    }

    return (
        <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="text-zinc-50 font-semibold text-3xl">Atividades</h2>
                <Button title="Criar uma atividade" onClick={OpenCreateActivityModal} variant="primary">
                    <Plus className="size-5 text-zinc-950" />
                    Cadastrar Atividade
                </Button>
            </div>

            <div className="space-y-8">
                {activities.map(category => (
                    <div key={category.date} className="space-y-2.5">
                        <div className="flex items-baseline gap-2">
                            <span className="text-zinc-300 font-semibold text-xl">Dia {format(category.date, 'd')}</span>
                            <span className="text-zinc-500 text-xs">{format(category.date, 'EEEE', { locale: ptBR })}</span>
                        </div>
                        {category.activities.length > 0 ? (
                            <div className="space-y-2.5">
                                {category.activities.map(activity => (
                                    <div key={activity.id} className="flex items-center gap-3 bg-zinc-900 rounded-lg px-4 py-2.5 shadow-shape">
                                        <CircleCheck className="size-5 text-lime-300" />
                                        <span className="text-zinc-100">{activity.title}</span>
                                        <p className="ml-auto text-zinc-400 text-sm">{format(activity.occurs_at, 'HH:mm')}h</p>
                                        <button onClick={()=>OpenModalDelete(activity.id)}>
                                            <Trash2 className="size-4 text-zinc-400 hover:text-red-500" />
                                        </button>
                                    </div>
                                )
                                )}
                            </div>
                        ) : (
                            <p className="text-zinc-500">Nenhuma atividade cadastrada nessa data.</p>
                        )}
                    </div>
                )
                )}
            </div>
            {openModalDelete &&(
                <ConfirmDelete
                onConfirm={()=>DeleteActivity(activityId ? activityId : "")}
                OnCancel={()=>setOpenModalDelete(false)}
                />
            )}
        </div>
    )
}
