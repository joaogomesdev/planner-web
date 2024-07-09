import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
} from 'lucide-react'
import { FormEvent, useState } from 'react'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  function toggleGuestsInput() {
    setIsGuestsInputOpen(!isGuestsInputOpen)
  }

  function toggleGuestsModal() {
    setIsGuestsModalOpen(!isGuestsModalOpen)
  }

  function addNewEmailsToInvite(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const email = new FormData(e.currentTarget).get('email')

    if (typeof email === 'string') {
      if (emailsToInvite.includes(email)) return
      setEmailsToInvite([...emailsToInvite, email])
    }

    e.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    setEmailsToInvite(emailsToInvite.filter(email => email !== emailToRemove))
  }

  return (
    <div className='h-screen flex items-center justify-center bg-fading-grid bg-no-repeat bg-center'>
      <div className='max-w-3xl w-full px-6 text-center space-y-10'>
        <div className='flex flex-col items-center gap-3'>
          <img src='/logo.svg' alt='plann.er' />
          <p className='text-zinc-300 text-lg'>
            Invite your friends and plan your next trip!
          </p>
        </div>

        <div className='space-y-4'>
          <div className='h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3 '>
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='z-5 text-zinc-400' />
              <input
                disabled={isGuestsInputOpen}
                type='text'
                placeholder='Where?'
                className='bg-transparent text-lg placeholder-zinc-400 outline-none flex-1'
              />
            </div>

            <div className='flex items-center gap-2'>
              <Calendar className='z-5 text-zinc-400' />
              <input
                disabled={isGuestsInputOpen}
                type='text'
                placeholder='When?'
                className='bg-transparent text-lg placeholder-zinc-400 w-40 outline-none'
              />
            </div>

            <div className='w-px h-6 bg-zinc-800' />

            {isGuestsInputOpen ? (
              <button
                onClick={toggleGuestsInput}
                className='bg-zinc-800 rounded-lg py-2 px-5 text-zinc-200 font-medium flex items-center gap-2 hover:bg-zinc-700 transition-colors'
              >
                Change location and date
                <Settings2 className='size-5 text-zinc-200' />
              </button>
            ) : (
              <button
                onClick={toggleGuestsInput}
                className='bg-lime-300 rounded-lg py-2 px-5 text-lime-950 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors'
              >
                Continue
                <ArrowRight className='size-5 text-lime-950' />
              </button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className='h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape gap-3 w-full'>
              <button
                onClick={toggleGuestsModal}
                className='flex items-center gap-2 flex-1 text-left'
              >
                <UserRoundPlus className='z-5 text-zinc-400' />
                <span className='text-zinc-400 text-lg flex-1'>
                  Who will be on the trip?
                </span>
              </button>

              <div className='w-px h-6 bg-zinc-800' />

              <button className='bg-lime-300 rounded-lg py-2 px-5 text-lime-950 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors'>
                Confirm trip
                <ArrowRight className='size-5 text-lime-950' />
              </button>
            </div>
          )}
        </div>

        <p className='text-sm text-zinc-500'>
          When planning your trip through plann.er you automatically agree{' '}
          <br /> with{' '}
          <a href='#' className='text-zinc-300 underline'>
            terms
          </a>{' '}
          and{' '}
          <a href='#' className='text-zinc-300 underline'>
            privacy policies
          </a>
          .
        </p>
      </div>

      {isGuestsModalOpen && (
        <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
          <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 gap-20 space-y-5'>
            <div className='space-y-5'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>Select guests</h2>
                <button onClick={toggleGuestsModal}>
                  <X className='size-5 text-zinc-400 hover:text-zinc-300 transition-colors' />
                </button>
              </div>

              <p className='text-sm text-zinc-400'>
                Guests will receive emails to confirm their participation in the
                trip.
              </p>

              <div className='flex flex-wrap gap-2'>
                {emailsToInvite.map(email => (
                  <button
                    onClick={() => removeEmailFromInvites(email)}
                    key={email}
                    type='button'
                    className='group rounded-md bg-zinc-800 flex items-center gap-2 py-1.5 px-2.5 transition-colors'
                  >
                    <span className='text-zinc-400 group-hover:text-zinc-300'>
                      {email}
                    </span>
                    <X className='size-4 text-zinc-400 group-hover:text-zinc-300' />
                  </button>
                ))}
              </div>

              <div className='w-full h-px bg-zinc-800' />

              <form
                onSubmit={addNewEmailsToInvite}
                className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'
              >
                <div className='px-2 flex items-center flex-1 gap-2'>
                  <AtSign className='size-5 text-zinc-400' />

                  <input
                    type='email'
                    name='email'
                    placeholder='Guest e-mail'
                    className='bg-transparent text-lg placeholder-zinc-400 flex-1 outline-none'
                  />
                </div>

                <button
                  type='submit'
                  className='bg-lime-300 rounded-lg py-2 px-5 text-lime-950 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors'
                >
                  Invite
                  <Plus className='size-5 text-lime-950' />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
