import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const BookPreview = ({
  book
}) => (
  <>
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-4">
        <img src={book.frontmatter.photo} alt={book.frontmatter.name} />
      </div>
      <div className="col-sm-8">
        <p dangerouslySetInnerHTML={{ __html: book.html }}></p>
        <OutboundLink href={book.frontmatter.buy} className="tem-btn nav-link move-eff"><span>Purchase</span></OutboundLink>
      </div>
    </div>
  </>
)

const SpeakerBooks = ({
  books
}) => {
  const Books = books
    ? books
        .map((book, i) =>
          <BookPreview key={i} book={book} />
        )
    : null;

  console.log(Books);
  return (
      <>
        {Books.length > 0
          ? <>
              <h2 className="text-center">Resources</h2>
              <hr />
              {Books}
            </>
          : <></>
        }
      </>
  )
}
export default SpeakerBooks;