import type {GetServerSideProps, NextPage} from 'next'

type CachedPageProps = {
  dateStr: string;
}

const cacheControlValue = 's-maxage=10, stale-while-revalidate=10000';

const CachedPage: NextPage<CachedPageProps> = ({ dateStr }) => {
  return (
    <div>
      <h1>Cached SSR page</h1>
      <p>Updated at {dateStr}</p>
      <p>Expecting the following header value: </p>
      <pre>Cache-Control: {cacheControlValue}</pre>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res}) => {
  res.setHeader('Cache-Control', cacheControlValue);
  return {
    props: {
      dateStr: new Date().toISOString(),
    }
  }
}


export default CachedPage;
