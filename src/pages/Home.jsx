function Home() {
  return (
    <div>
      <h2>Welcome to Home Page!</h2>
      <p>
        This is the middle content for the home route. It changes when you
        navigate.
      </p>
      <button
        className="btn"
        style={{ padding: "0.5rem 1rem", borderRadius: 6 }}
      >
        Themed Button
      </button>
    </div>
  );
}

export default Home;
