import { notFound } from "next/navigation";

const NewsDetailsPage = async ({ params }) => {
  const data = ["general", "education", "sports"];
  const slug = (await params).slug;

  const foundData = data.find((item) => slug.includes(item));

  if (!foundData) {
    throw notFound();
  }

  if (foundData) {
    return (
      <div className="text-7xl">
        <header>News of {foundData}</header>
      </div>
    );
  }
};

export default NewsDetailsPage;
