interface BookInterface {
  book: {
    // accessInfo: {},
  // etag: string,
  id: string,
  // kind: string,
  // saleInfo: {},
  // searchInfo: {},
  // selfLink: string,
  volumeInfo: {
    title: string,
    authors: [string],
    imageLinks: {
      thumbnail: string
    },
    publisher: string,
    publishedDate: string,
    description: string
  },
  }
}

export default BookInterface;