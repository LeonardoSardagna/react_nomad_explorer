import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsStep } from "./steps/invite-guests-step";
import { ConfirmTripModal } from "./steps/confirm-trip-modal";
import { InviteGuestsModal } from "./steps/invite-guests-modal";
import { DestinationAndDate } from "./steps/destination-and-date-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

export function CreateTrip() {
    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [EmailToInvite, setEmailToInvite] = useState([])
    const [isConfirmPlanner, setIsConfirmPlanner] = useState(false);
    const navigate = useNavigate();

    const [eventStartAndEndDates, setEventStartAndEndDates] = useState<DateRange | undefined>()
    const [destination, setDestination] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [ownerEmail, setOwnerEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function openGuestInput() {
        setIsGuestsInputOpen(true)
    }

    function closeGuestInput() {
        setIsGuestsInputOpen(false)
    }

    function openModal() {
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false)
    }

    function openModalConfirm() {
        setIsConfirmPlanner(true)
    }

    function closeModalConfirm() {
        setIsConfirmPlanner(false)
    }

    function addNewEmailToInvite(evento: FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        const data = new FormData(evento.currentTarget);
        const email = data.get('email')?.toString();

        if (!email) {
            return
        }
        if (EmailToInvite.includes(email)) {
            return
        }

        setEmailToInvite([
            ...EmailToInvite,
            email
        ])

        evento.currentTarget.reset();
    }

    function excludeEmailToInvite(removeEmailToInvite: string) {
        const newEmail = EmailToInvite.filter(email => email !== removeEmailToInvite)
        setEmailToInvite(newEmail)
    }

    async function createTrip(evento: FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        setIsLoading(true)

        try {
            if (!ownerEmail || !ownerName || !destination || !EmailToInvite || !eventStartAndEndDates?.from || !eventStartAndEndDates?.to) {
                setIsLoading(false)
                return
            }
            const response = await api.post('/trips', {
                ownerName: ownerName,
                ownerEmail: ownerEmail,
                destination: destination,
                emails_to_invite: EmailToInvite,
                starts_at: eventStartAndEndDates.from,
                ends_at: eventStartAndEndDates.to
            })

            const { id } = response.data
            await api.get(`/trips/${id}/confirm`)
            navigate(`/trips/${id}`)
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    }

    return (
        <div className="h-screen flex justify-center items-center bg-pattern bg-center">
            <div className="px-6 max-w-4xl w-full text-center space-y-10">
                <div className="flex flex-col space-y-3">
                    <div className="flex justify-center items-center gap-5">
                        <img src="/logo-nomad-1.png" alt="logo nomad" className="size-14 rounded-full" />
                        <p className="text-3xl text-purpleLight">Nomad Explorer</p>
                    </div>
                    <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>

                <div className="space-y-4">
                    <DestinationAndDate
                        isGuestsInputOpen={isGuestsInputOpen}
                        closeGuestInput={closeGuestInput}
                        openGuestInput={openGuestInput}
                        setEventStartAndEndDates={setEventStartAndEndDates}
                        eventStartAndEndDates={eventStartAndEndDates}
                        setDestination={setDestination}
                    />

                    {isGuestsInputOpen && (
                        <InviteGuestsStep
                            EmailToInvite={EmailToInvite}
                            openModal={openModal}
                            openModalConfirm={openModalConfirm}
                        />
                    )}
                </div>

                <p className="font-sm text-zinc-500">
                    Ao planejar sua viagem pelo nomad você automaticamente concorda <br /> com nossos <a href="#" className="text-zinc-300 underline hover:text-purpleMedium">termos de uso</a> e <a href="#" className="text-zinc-300 underline hover:text-purpleMedium">políticas de privacidade</a>.
                </p>
            </div>

            {
                isModalOpen && (
                    <InviteGuestsModal
                        EmailToInvite={EmailToInvite}
                        addNewEmailToInvite={addNewEmailToInvite}
                        closeModal={closeModal}
                        excludeEmailToInvite={excludeEmailToInvite}
                        openGuestInput={openGuestInput}
                    />
                )
            }

            {
                isConfirmPlanner && (
                    <ConfirmTripModal
                        closeModalConfirm={closeModalConfirm}
                        createTrip={createTrip}
                        setOwnerName={setOwnerName}
                        setOwnerEmail={setOwnerEmail}
                        destination={destination}
                        eventStartAndEndDates={eventStartAndEndDates}
                        isLoading={isLoading}
                    />
                )
            }
        </div >
    )
}
