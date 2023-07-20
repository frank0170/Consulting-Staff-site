export const metadata = {
  title: 'Afaceri de Vanzare',
  description: 'Page description',
}

import Content from './content'
import Newsletter from '@/components/newsletter'
import connectDb from '@/components/utils/cacheddb';

async function fetchData() {
  try {
    const db = await connectDb();
    const collectionName = "Afaceri";
    const collection = db.collection(collectionName);
    const results = await collection.find({}).toArray();
    console.log(results);
  } catch (error) {
    console.error("Error fetching data from MongoDB:", error);
  }
}

export default async function  Tutorials() {
  const data = await fetchData()
  return (
    <>
      <Content />
      <Newsletter />
    </>
  )
}
