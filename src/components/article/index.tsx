import "./article.css";

interface propType {
  imgUrl: string;
  date: string;
  text: string;
}

export default function Article({ imgUrl, date, text }: propType) {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={`/img/${imgUrl}.png`} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read more...</p>
      </div>
    </div>
  );
}
