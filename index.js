
import Link from 'next/link'

export default function Home(){

return (
<div style={{background:'#050505',color:'white',minHeight:'100vh',padding:'40px'}}>

<h1>BATTLEDROP</h1>
<p>PUBG Esports Platform</p>

<ul style={{lineHeight:'2',marginTop:30}}>
<li><Link href="/profile">Player Profile</Link></li>
<li><Link href="/maps">Map Analytics</Link></li>
<li><Link href="/analysis">AI Performance</Link></li>
<li><Link href="/tournaments">Tournaments</Link></li>
<li><Link href="/teams">Teams</Link></li>
<li><Link href="/leaderboard">Leaderboard</Link></li>
<li><Link href="/news">Esports News</Link></li>
<li><Link href="/admin">Admin Panel</Link></li>
</ul>

</div>
)
}
