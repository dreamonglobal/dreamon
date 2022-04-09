import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { MarkdownRemark } from '../../types'

const BookPreview = ({
  book: {
    frontmatter: { photo, name, buy },
    html,
  },
}: {
  book: MarkdownRemark
}) => (
  <>
    <div className="col-sm-8 col-sm-offset-2">
      <div className="col-sm-4">
        <img src={photo} alt={name} />
      </div>
      <div className="col-sm-8">
        <p data-cy="bookDescription" dangerouslySetInnerHTML={{ __html: html }}></p>
        <OutboundLink href={buy} className="tem-btn nav-link move-eff">
          <span>Purchase</span>
        </OutboundLink>
      </div>
    </div>
  </>
)

const SpeakerBooks = ({ books }: { books: MarkdownRemark[] }) => {
  const Books = books
    ? books.map((book: MarkdownRemark, i: number) => (
        <BookPreview key={i} book={book} />
      ))
    : null

  return (
    <>
      {Books.length > 0 ? (
        <>
          <h2 className="text-center">Resources</h2>
          <hr />
          {Books}
        </>
      ) : (
        <></>
      )}
    </>
  )
}
export default SpeakerBooks
