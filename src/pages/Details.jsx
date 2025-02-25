import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
const Details = () => {
  const { title } = useParams();
  const { loading, data, error } = useFetch(
    `https://registry.npmjs.org/${title}`
  );
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="flex p-2 gap-5 border border-purple-500 shadow-lg shadow-purple-400 rounded rounded-lg">
      <div>
        <h1 className="text-center">{data.name}</h1>
        <p className="text-center">{data["dist-tags"].latest}</p>
        <h2>Created By {data.author?.name || "Unknown Author"}</h2>
        <p>Description:{data.description}</p>
        <p>License:{data.license}</p>
        <p>Created Date:{new Date(data.time.created).toDateString()}</p>
      </div>

      <div className="flex flex-col gap-2 items-center justify-center">
        <a href="data.homepage" target="_blank">
          <button className="hover:shadow-lg hover:shadow-pink-500 hover:rounded hover:rounded-lg bg-pink-500 text-white rounded rounded-lg  m-2 p-3">
            Github
          </button>
        </a>
        <a href="data.homepage" target="_blank">
          <button className="bg-pink-500 text-white rounded rounded-lg pointer m-2 p-2.5 hover:shadow-lg hover:shadow-pink-500 hover:rounded hover:rounded-lg">
            Website
          </button>
        </a>
      </div>
    </div>
  );
};
export default Details;
