async function getProiect(id: any) {
    const res = await fetch(`http://localhost:5080/proiecte/${id}`)
    const data = await res.json()

    console.log('data', data)
    console.log('id', id)
    return data

}

export default function Proiect({ params }: any) {
    const { id } = params;

    const proiect: any =  getProiect(id)

    console.log('id', params.id)
    

    console.log(proiect)

    return (<div>
        {proiect.titlu}
    </div>

    )
}