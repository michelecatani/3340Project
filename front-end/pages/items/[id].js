import { useRouter } from 'next/router';

export default function Item({item}) {
    const router = useRouter();
    const { id } = router.query;

    return (<>
        <h1>{item.name} {id}</h1>
        <p>This is a dynamic rendering, see the title. Need to make it fancier obvs.</p>
    </>)

}

export async function getServerSideProps({params}) {
    console.log(params);
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/items/seeItem?id=${params.id}`)
    const data = await req.json();

    return {
        props: { item: data}
    }
}