import { fetchPhotos } from "../utils/axios";
import { useQuery } from "@tanstack/react-query";
import ImageComponent from "./ImageComponent";
import { useGlobalContext } from "../Context";

function Gallery() {
  const { searchInput } = useGlobalContext();
  console.log(searchInput);

  const { isLoading, data, error } = useQuery({
    queryKey: ["pics", searchInput],
    queryFn: async () => {
      const {
        data: { results: data },
      } = await fetchPhotos.get("/", {
        params: { query: searchInput || "cat" },
      });
      console.log(data);

      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <p style={{ marginTop: "1rem", fontSize: "2rem" }}>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="image-container">
        <p
          style={{ marginTop: "1rem", fontSize: "2rem" }}
        >{`There was an error: ${error.message}`}</p>
      </section>
    );
  }

  if (data.length === 0) {
    return (
      <section className="image-container">
        <p style={{ marginTop: "1rem", fontSize: "2rem" }}>
          No Results Found...
        </p>
      </section>
    );
  }

  return (
    <section className="image-container">
      {data.map((item) => {
        return <ImageComponent key={item.id} item={item} />;
      })}
    </section>
  );
}
export default Gallery;
