import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "../common/svg";
import Head from "next/head";
import { Post } from "../components/Post";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchOptions, setSearchOptions] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const { mangaName, chapterNumber } = searchOptions;

    const res = await axios.get(
      `https://www.reddit.com/search.json?q=title:${mangaName} Chapter ${chapterNumber}`
    );
    setPosts(res.data.data.children.map((obj) => obj.data));
    setLoading(false);
  };

  const handleSearch = () => {
    fetchPosts();
  };

  useEffect(() => {
    const [mangaName, chapterNumber] = document.title
      .toLowerCase()
      .split("chapter");
    setSearchOptions({ mangaName, chapterNumber });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 10,
          flexDirection: "column",
          padding: 20,
        }}
      >
        <div style={{ margin: "auto", fontSize: 30, width: 30 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            class="_1O4jTk-dZ-VIxsCuYB6OR8 "
          >
            <g>
              <circle fill="#FF4500" cx="10" cy="10" r="10"></circle>
              <path
                fill="#FFF"
                d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
              ></path>
            </g>
          </svg>
        </div>

        <input
          style={{
            borderRadius: 10,
            border: "1px solid",
            padding: 5,
          }}
          value={searchOptions.mangaName}
          onChange={(e) => {
            setSearchOptions((prevState) => ({
              ...prevState,
              mangaName: e.target.value,
            }));
          }}
          placeholder="Manga Name"
        />
        <input
          style={{
            borderRadius: 10,
            border: "1px solid",
            padding: 5,
          }}
          value={searchOptions.chapterNumber}
          onChange={(e) => {
            setSearchOptions((prevState) => ({
              ...prevState,
              chapterNumber: e.target.value,
            }));
          }}
          placeholder="Chapter Number"
        />

        <div
          style={{
            padding: 5,
            backgroundColor: "rgba(198, 204, 175, 0.48)",
            textAlign: "center",
            borderRadius: 10,
            cursor: "pointer",
          }}
          onClick={handleSearch}
          className="hoverable"
        >
          Search Discussions
        </div>

        {loading && (
          <div style={{ margin: "auto" }}>
            <Spinner />
          </div>
        )}

        {!loading && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default IndexPage;
