import HomePage from '@/components/homepage/homepage'
export default function Example({search}) {
  return (
    <div>
    <header>
      <title>q_flow</title>
    </header>
      <HomePage search={search}/>
    </div>
  )
}

