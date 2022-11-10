import { useRouter } from 'next/router';

export default function Collection() {
    const router = useRouter();

    console.log(router.query.collectionId);

    //send a request to the backend API
    //to fetch the collection with collectionId

  return (
    <div>Collection</div>
  )
}
