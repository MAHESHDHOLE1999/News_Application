import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsCard from "./NewsCard";
import { fetchNews } from "../utils/newsApi";
import { Loader, AlertCircle } from "lucide-react";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadInitialNews();
  }, []);

  const loadInitialNews = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchNews(1);
    //   console.log("Initial news data:", data);
      setArticles(data.results || []);
      setPage(2);
      setHasMore(data.results?.length > 0);
    } catch (err) {
      setError("Failed to load news. Please try again later.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreNews = async () => {
    try {
      const data = await fetchNews(page);
      if (data.results && data.results.length > 0) {
        setArticles((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Error loading more:", err);
      setHasMore(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader
            className="animate-spin text-blue-600 mx-auto mb-4"
            size={60}
          />
          <p className="text-gray-600 text-lg">Loading latest news...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md text-center">
          <AlertCircle className="text-red-600 mx-auto mb-4" size={48} />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Oops!</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={loadInitialNews}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreNews}
      hasMore={hasMore}
      loader={
        <div className="flex justify-center py-8">
          <Loader className="animate-spin text-blue-600" size={32} />
        </div>
      }
      endMessage={
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">
            ✓ You've reached the end of news
          </p>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {articles.map((article, index) => (
          <NewsCard key={`${article.link}-${index}`} article={article} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default NewsFeed;
