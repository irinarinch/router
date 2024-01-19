import NewsCard, { TNews } from "../../components/task3/NewsCard";
import { useState, useEffect } from "react";
import { NewsService } from "../../services/news.service";
import { AxiosError } from "axios";
import { useOutletContext } from "react-router-dom";
import { TContext } from "../../components/task3/Layout";
import style from "../../components/task3/authentication.module.css";

const AuthPage = () => {
  const [data, setData] = useState<TNews[]>([]);
  const [error, setError] = useState<AxiosError | null>(null);
  const { token, setToken } = useOutletContext<TContext>();

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      const data = await NewsService.getData(
        token,
        import.meta.env.VITE_NEWS_URL
      );

      data.message ? setError(data) : setData(data);
    };
    fetchData();

    if (
      error &&
      error.response !== undefined &&
      error.response.status === 401
    ) {
      setToken("");
      localStorage.clear();
    }
  }, [token, setToken, error]);

  return (
    <div className={style.news_container}>
      {data.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
};

export default AuthPage;
