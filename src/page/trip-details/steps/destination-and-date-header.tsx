import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { format } from "date-fns";

interface TripProps {
    id: string
    ownerName: string
    ownerEmail: string
    destination: string
    startsAt: string
    endsAt: string
    isConfirmed: boolean
}

export function DestinationDateHeader() {
    const { idTrip } = useParams()
    const [trip, setTrip] = useState<TripProps | undefined>();
    const navigate = useNavigate();

    async function editTrip() {
        navigate(`/`)
    }

    useEffect(() => {
        api.get(`/trips/${idTrip}`).then(response => setTrip(response.data))
    }, [idTrip])

    const displayedDate = trip
        ? format(trip.startsAt, "d' de 'LLL").concat(' até ').concat(format(trip.endsAt, "d ' de ' LLL"))
        : null

    return (
        <div className="flex justify-between items-center h-16 px-4 rounded-xl shadow-shape bg-zinc-900">
            <div className="flex items-center gap-2">
                <MapPin className="text-zinc-400 size-5" />
                <span className="text-zinc-100 flex items-center gap-2">{trip?.destination}</span>
            </div>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                    <Calendar className="text-zinc-400 size-5" />
                    <span className="text-zinc-100">{displayedDate}</span>
                </div>

                <div className="w-px h-6 bg-zinc-800" />

                <Button variant="secondary" onClick={editTrip}>
                    Alterar local/data
                    <Settings2 className="size-5 text-zinc-200" />
                </Button>
            </div>
        </div>
    )
}
