
export async function getPlayerStats(playerName){

const API_KEY = "PUT_API_KEY"

const res = await fetch(
`https://api.pubg.com/shards/steam/players?filter[playerNames]=${playerName}`,
{
headers:{
Authorization:`Bearer ${API_KEY}`,
Accept:"application/vnd.api+json"
}
})

return await res.json()

}
