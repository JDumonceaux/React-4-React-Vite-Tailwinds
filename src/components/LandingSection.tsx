const greeting = 'Hello'
const bio1 =
  'Exercise 4'

function LandingSection() {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-8 ">
      <h1 className="my-4 text-5xl font-serif">{greeting}</h1>
      <p className="text-xl">{bio1}</p>
    </div>
  )
}

export default LandingSection
