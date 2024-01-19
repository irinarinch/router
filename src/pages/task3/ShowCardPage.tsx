import { useOutletContext, useParams } from "react-router-dom";
import NewsCard, { TNews } from "../../components/task3/NewsCard";
import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { NewsService } from "../../services/news.service";
import { TContext } from "../../components/task3/Layout";
import style from '../../components/task3/authentication.module.css'

const ShowCardPage = () => {
  const { id } = useParams();
  const [current, setCurrent] = useState<TNews | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const { token } = useOutletContext<TContext>();
  
  useEffect(() => {
    if (!token) return;
    const fetchData = async () => {
      if (!id) return;

      const data = await NewsService.getData(token, import.meta.env.VITE_NEWS_URL, id);
      data.id ? setCurrent(data) : setError(data);
    };

    fetchData();
  }, [token, id]);

  return (
    <div className={style.news_container}>
      {current && <NewsCard news={current} />}
      {error && <div className={style.error}>{error.response?.status} Not Found</div>}
    </div>
  );
};

export default ShowCardPage;
