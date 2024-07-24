import { useState } from "react";
import { CreateActivityModal } from "./steps/create-activity-modal";
import { CreateLinksModal } from "./steps/create-links-modal";
import { Activity } from "./steps/activity";
import { LinksImportant } from "./steps/important-links";
import { Guests } from "./steps/guests";
import { DestinationDateHeader } from "./steps/destination-and-date-header";
import { ConfirmParticipantModal } from "./steps/confirm-participant-modal";
import { ParticipantProps } from "../../interface/participantProps";
import { TesteLink } from "../../interface/linksProps";
import { Category } from "../../interface/categoryProps";

export function TripDetails() {
    const [isCreateActivityModal, setIsCreateActivityModal] = useState(false)
    const [isCreateLinkModal, setIsCreateLinkModal] = useState(false)
    const [isConfirmParticipantModal, setIsConfirmParticipantModal] = useState(false)
    const [participants, setParticipants] = useState<ParticipantProps[]>([]);
    const [links, setLinks] = useState<TesteLink[]>([]);
    const [activities, setActivities] = useState<Category[]>([]);

    function OpenCreateActivityModal() {
        setIsCreateActivityModal(true)
    }

    function CloseCreateActivityModal() {
        setIsCreateActivityModal(false)
    }

    function OpenCreateLinkModal() {
        setIsCreateLinkModal(true)
    }

    function CloseCreateLinkModal() {
        setIsCreateLinkModal(false)
    }

    function OpenConfirmParticipantModal() {
        setIsConfirmParticipantModal(true)
    }

    function CloseConfirmParticipantModal() {
        setIsConfirmParticipantModal(false)
    }

    return (
        <div className="max-w-6xl py-10 px-6 mx-auto space-y-8">
            <DestinationDateHeader />
            <main className="flex gap-16 px-4">
                <Activity
                    OpenCreateActivityModal={OpenCreateActivityModal}
                    activities={activities}
                    setActivities={setActivities}
                />
                <div className="space-y-6 w-80">
                    <LinksImportant
                        OpenCreateLink={OpenCreateLinkModal}
                        links={links}
                        setLinks={setLinks}
                    />
                    <div className="w-full h-px bg-zinc-800" />
                    <Guests
                        OpenConfirmParticipant={OpenConfirmParticipantModal}
                        participants={participants}
                        setParticipants={setParticipants}
                    />
                </div>
            </main>
            {isCreateActivityModal && (
                <CreateActivityModal
                    CloseCreateActivityModal={CloseCreateActivityModal}
                    activities={activities}
                    setActivities={setActivities}
                />
            )}
            {isCreateLinkModal && (
                <CreateLinksModal
                    CloseCreateLink={CloseCreateLinkModal}
                    setLinks={setLinks}
                />
            )}
            {isConfirmParticipantModal && (
                <ConfirmParticipantModal
                    CloseConfirmParticipantModal={CloseConfirmParticipantModal}
                    participants={participants}
                    setParticipants={setParticipants}
                />
            )}
        </div>
    )
}
