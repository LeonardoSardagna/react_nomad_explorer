import { ArrowRight, AtSign, Calendar, MapPin, Plus, Settings2, UserPlus2Icon, X } from "lucide-react";
import { FormEvent, useState } from "react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [EmailToInvite, setEmailToInvite] = useState([
    "leonardosardagna00@gmail.com"
  ])

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

  function addNewEmailToInvite(evento: FormEvent<HTMLFormElement>){
    evento.preventDefault();

    const data = new FormData(evento.currentTarget);
    const email = data.get('email')?.toString();

    if(!email){
      return
    }
    if(EmailToInvite.includes(email)){
      return
    }

    setEmailToInvite([
      ...EmailToInvite,
      email
    ])

    evento.currentTarget.reset();
  }

  function excludeEmailToInvite(removeEmailToInvite: string){
      const newEmail = EmailToInvite.filter(email => email !== removeEmailToInvite)
      setEmailToInvite(newEmail)
  }

  return (
    <div className="h-screen flex justify-center items-center bg-pattern bg-center">
      <div className="px-6 max-w-3xl w-full text-center space-y-10">
        <div className="flex flex-col space-y-3">
          <div className="flex justify-center items-center gap-5">
            <img src="/logo-nomad-1.png" alt="logo nomad" className="size-14 rounded-full" />
            <p className="text-3xl text-purpleLight">Nomad Explorer</p>
          </div>
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center bg-zinc-900 h-16 px-4 rounded-lg shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" disabled={isGuestsInputOpen} />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-32 outline-none" disabled={isGuestsInputOpen} />
            </div>

            <div className="w-px h-6 bg-zinc-800" />
            {
              isGuestsInputOpen ?
                (<button onClick={closeGuestInput} className="flex items-center gap-2 bg-purpleDark text-zinc-950 px-3 py-2 rounded-md hover:bg-purpleMedium font-medium">
                  Alterar local/data
                  <Settings2 className="size-5 text-zinc-950" />
                </button>)
                :
                (<button onClick={openGuestInput} className="flex items-center gap-2 bg-purpleDark text-zinc-950 px-3 py-2 rounded-md hover:bg-purpleMedium font-medium">
                  Continuar
                  <ArrowRight className="size-5 text-zinc-950" />
                </button>)
            }
          </div>

          {isGuestsInputOpen && (
            <div className="flex items-center bg-zinc-900 h-16 px-4 rounded-lg shadow-shape gap-3">
              <button className="flex items-center gap-2 flex-1" onClick={openModal}>
                <UserPlus2Icon className="size-5 text-zinc-400" />
                <span className="bg-transparent text-lg text-zinc-400 outline-none flex-1 text-start">
                  Quem estará na viagem?
                </span>
              </button>

              <div className="w-px h-6 bg-zinc-800" />

              <button onClick={openGuestInput} className="flex items-center gap-2 bg-purpleDark text-zinc-950 px-3 py-2 rounded-md hover:bg-purpleMedium font-medium">
                Confirmar Viagem
                <ArrowRight className="size-5 text-zinc-950" />
              </button>
            </div>
          )}
        </div>

        <p className="font-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br /> com nossos <a href="#" className="text-zinc-300 underline hover:text-purpleMedium">termos de uso</a> e <a href="#" className="text-zinc-300 underline hover:text-purpleMedium">políticas de privacidade</a>.
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-zinc-900 space-y-2 rounded-xl px-6 py-5 w-[640px]">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Selecionar convidados</h2>
              <button onClick={closeModal}>
                <X />
              </button>
            </div>
            <p className="text-zinc-400">Os convidados irão receber e-mails para confirmar a participação na viagem.</p>
            <div className="flex flex-wrap gap-2">
              {EmailToInvite.map(email => (
                <div key={email} className="flex items-center bg-zinc-800 rounded-lg px-2.5 py-1.5">
                  <span className="px-2.5 py-1.5 text-zinc-300">{email}</span>
                  <button type="button" onClick={()=>excludeEmailToInvite(email)}>
                    <X />
                  </button>
                </div>
              ))}
            </div>

            <div className="w-full h-px bg-zinc-800" />

            <form onSubmit={addNewEmailToInvite} className="bg-zinc-950 px-4 py-2.5 rounded-lg ">
              <div className="flex items-center gap-2 flex-1">
                <AtSign className="size-5 text-zinc-400" />
                <input type="email" name="email" placeholder="Digite o e-mail do convidado" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                <button onClick={openGuestInput} className="flex items-center gap-2 bg-purpleDark text-zinc-950 px-3 py-2 rounded-md hover:bg-purpleMedium font-medium">
                  Convidar
                  <Plus className="size-5 text-zinc-950" />
                </button>
              </div>
            </form>
          </div>

        </div>
      )}

    </div>
  )
}
