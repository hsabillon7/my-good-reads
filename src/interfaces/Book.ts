interface BookInterface {
  id: string,
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

export default BookInterface;