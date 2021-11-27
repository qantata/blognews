import axios from "axios";

export type Article = {
  id: string;
  author: {
    name: string;
    photo: string;
  };
  content: string;
  createdAt: string;
  image: string | null;
  title: string;
  type: string;
  views: number;
};

export enum ArticleFilter {
  ALL,
  NEWS,
  BLOGS,
}

export enum ArticleSorter {
  DATE,
  TITLE,
  VIEWS,
}

const responseToAppType: { [key: string]: string } = {
  news: ArticleFilter[ArticleFilter.NEWS],
  blog: ArticleFilter[ArticleFilter.BLOGS],
};

export const fetchArticles = async (): Promise<Article[]> => {
  // The "views" value is only used in the app, it's not available in the response
  let articles: Omit<Article, "views">[] = [];

  try {
    const result = await axios.get(
      "https://frontend-test-task.free.beeceptor.com/articles"
    );

    if (!result.data.articles) {
      throw new Error("API response doesn't have articles");
    }

    articles = result.data.articles;
  } catch (err) {
    console.error("Couldn't fetch articles:", err);

    /*
     * The API has a request limit of 50/day
     * so try to load an offline backup (mostly meant for development)
     */
    try {
      const { articles: offlineArticles } = await import("./articles-data");
      articles = offlineArticles.articles;
    } catch (err) {
      console.error("No local backup of article data available");
    }
  }

  if (articles.length) {
    // Convert the article type to the types that we use in the app
    return articles.map((a) => ({
      ...a,
      type: responseToAppType[a.type],
      views: 0,
    }));
  }

  return [];
};
