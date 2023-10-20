export default function Home() {
  return (
    <>
      {Array(100)
        .fill(null)
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={i}>main content</p>
        ))}
    </>
  )
}
