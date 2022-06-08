export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map(user => ({
    params: { id: user.id.toString() }
  }));

  return { paths, fallback: false };
} 

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const ninja = await res.json();

  return { props: { ninja } };
}

const Details = ({ninja}) => {
  return (
    <>
      <div>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
      </div>
    </>
  );
}
 
export default Details;