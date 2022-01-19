import { Article } from "../../components";
import "./blog.css";

export default function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl="blog01"
            date="17 jan, 2022"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl="blog02"
            date="17 jan, 2022"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl="blog03"
            date="17 jan, 2022"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl="blog04"
            date="17 jan, 2022"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            imgUrl="blog05"
            date="17 jan, 2022"
            text="GPT-3 and Open  AI is the future. Let us exlore how it is?GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
}
