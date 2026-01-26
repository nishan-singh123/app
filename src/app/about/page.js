export const metadata = {
  title: "About | Techno",
};

const Aboutpage = async ({ searchParams }) => {
  const query = await searchParams;

  const id = query?.id;

  if (id && !Number.isInteger(parseInt(id))) {
    throw new Error("Id is not a number.");
  }

  if (parseInt(id) > 100) {
    throw new Error("Id exceeded the max limit 100.");
  }

  return <div className="text-7xl">About page</div>;
};

export default Aboutpage;
